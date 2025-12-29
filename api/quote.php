<?php
/**
 * Quote Request API
 * Handles quote request submissions and stores them in the database
 */

require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    sendResponse(false, 'Method not allowed');
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($input['fullName']) || empty($input['email']) || empty($input['phone']) || 
    empty($input['company']) || empty($input['gpuType']) || empty($input['quantity']) || 
    empty($input['useCase']) || empty($input['projectDescription'])) {
    http_response_code(400);
    sendResponse(false, 'Missing required fields');
}

// Sanitize inputs
$fullName = sanitizeInput($input['fullName']);
$email = sanitizeInput($input['email']);
$phone = sanitizeInput($input['phone']);
$company = sanitizeInput($input['company']);
$gpuType = sanitizeInput($input['gpuType']);
$quantity = intval($input['quantity']);
$durationHours = isset($input['durationHours']) ? intval($input['durationHours']) : null;
$useCase = sanitizeInput($input['useCase']);
$estimatedBudget = isset($input['estimatedBudget']) && !empty($input['estimatedBudget']) 
    ? floatval($input['estimatedBudget']) : null;
$projectDescription = sanitizeInput($input['projectDescription']);
$startDate = isset($input['startDate']) && !empty($input['startDate']) 
    ? $input['startDate'] : null;
$requirements = isset($input['requirements']) ? sanitizeInput($input['requirements']) : null;

// Validate email
if (!validateEmail($email)) {
    http_response_code(400);
    sendResponse(false, 'Invalid email address');
}

// Validate quantity
if ($quantity < 1) {
    http_response_code(400);
    sendResponse(false, 'Quantity must be at least 1');
}

// Validate use case
$validUseCases = ['training', 'inference', 'research', 'development', 'other'];
if (!in_array($useCase, $validUseCases)) {
    http_response_code(400);
    sendResponse(false, 'Invalid use case');
}

// Get client information
$ipAddress = getClientIP();

try {
    $pdo = getConnection();
    
    // Insert quote request
    $sql = "INSERT INTO quote_requests 
            (full_name, email, phone, company, gpu_type, quantity, duration_hours, 
             use_case, estimated_budget, project_description, start_date, requirements, ip_address) 
            VALUES 
            (:full_name, :email, :phone, :company, :gpu_type, :quantity, :duration_hours, 
             :use_case, :estimated_budget, :project_description, :start_date, :requirements, :ip_address)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':full_name' => $fullName,
        ':email' => $email,
        ':phone' => $phone,
        ':company' => $company,
        ':gpu_type' => $gpuType,
        ':quantity' => $quantity,
        ':duration_hours' => $durationHours,
        ':use_case' => $useCase,
        ':estimated_budget' => $estimatedBudget,
        ':project_description' => $projectDescription,
        ':start_date' => $startDate,
        ':requirements' => $requirements,
        ':ip_address' => $ipAddress
    ]);
    
    $quoteId = $pdo->lastInsertId();
    
    // Optional: Send email notification to admin and customer
    // $adminEmail = 'quotes@aigpucloud.com';
    // $customerSubject = 'Quote Request Received - AI GPU Cloud';
    // $adminSubject = 'New Quote Request - Quote #' . $quoteId;
    // mail($email, $customerSubject, "Your quote request has been received...");
    // mail($adminEmail, $adminSubject, "New quote request from $company...");
    
    http_response_code(201);
    sendResponse(true, 'Quote request submitted successfully', [
        'id' => $quoteId,
        'quote_number' => 'QT' . str_pad($quoteId, 6, '0', STR_PAD_LEFT)
    ]);
    
} catch (PDOException $e) {
    error_log("Quote request error: " . $e->getMessage());
    http_response_code(500);
    sendResponse(false, 'Failed to submit quote request');
}
?>