<?php
/**
 * Contact Form Submission API
 * Handles contact form submissions and stores them in the database
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
if (empty($input['fullName']) || empty($input['email']) || empty($input['subject']) || empty($input['message'])) {
    http_response_code(400);
    sendResponse(false, 'Missing required fields');
}

// Sanitize inputs
$fullName = sanitizeInput($input['fullName']);
$email = sanitizeInput($input['email']);
$phone = isset($input['phone']) ? sanitizeInput($input['phone']) : null;
$company = isset($input['company']) ? sanitizeInput($input['company']) : null;
$subject = sanitizeInput($input['subject']);
$message = sanitizeInput($input['message']);

// Validate email
if (!validateEmail($email)) {
    http_response_code(400);
    sendResponse(false, 'Invalid email address');
}

// Get client information
$ipAddress = getClientIP();
$userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : null;

try {
    $pdo = getConnection();
    
    // Insert contact submission
    $sql = "INSERT INTO contact_submissions 
            (full_name, email, phone, company, subject, message, ip_address, user_agent) 
            VALUES 
            (:full_name, :email, :phone, :company, :subject, :message, :ip_address, :user_agent)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':full_name' => $fullName,
        ':email' => $email,
        ':phone' => $phone,
        ':company' => $company,
        ':subject' => $subject,
        ':message' => $message,
        ':ip_address' => $ipAddress,
        ':user_agent' => $userAgent
    ]);
    
    $submissionId = $pdo->lastInsertId();
    
    // Optional: Send email notification to admin
    // mail('admin@aigpucloud.com', 'New Contact Submission', $message, "From: $email");
    
    http_response_code(201);
    sendResponse(true, 'Contact form submitted successfully', [
        'id' => $submissionId
    ]);
    
} catch (PDOException $e) {
    error_log("Contact form error: " . $e->getMessage());
    http_response_code(500);
    sendResponse(false, 'Failed to submit contact form');
}
?>