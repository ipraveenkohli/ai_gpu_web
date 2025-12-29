<?php
/**
 * Newsletter Subscription API
 * Handles newsletter subscription submissions
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
if (empty($input['email'])) {
    http_response_code(400);
    sendResponse(false, 'Email is required');
}

// Sanitize and validate email
$email = sanitizeInput($input['email']);

if (!validateEmail($email)) {
    http_response_code(400);
    sendResponse(false, 'Invalid email address');
}

// Get client information
$ipAddress = getClientIP();

try {
    $pdo = getConnection();
    
    // Check if email already exists
    $checkSql = "SELECT id, status FROM newsletter_subscriptions WHERE email = :email";
    $checkStmt = $pdo->prepare($checkSql);
    $checkStmt->execute([':email' => $email]);
    $existing = $checkStmt->fetch();
    
    if ($existing) {
        if ($existing['status'] === 'active') {
            http_response_code(409);
            sendResponse(false, 'Email already subscribed');
        } else {
            // Reactivate subscription
            $updateSql = "UPDATE newsletter_subscriptions 
                         SET status = 'active', ip_address = :ip_address, updated_at = NOW() 
                         WHERE email = :email";
            $updateStmt = $pdo->prepare($updateSql);
            $updateStmt->execute([
                ':email' => $email,
                ':ip_address' => $ipAddress
            ]);
            
            http_response_code(200);
            sendResponse(true, 'Newsletter subscription reactivated successfully');
        }
    } else {
        // Insert new subscription
        $sql = "INSERT INTO newsletter_subscriptions (email, ip_address) 
                VALUES (:email, :ip_address)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':email' => $email,
            ':ip_address' => $ipAddress
        ]);
        
        $subscriptionId = $pdo->lastInsertId();
        
        // Optional: Send welcome email
        // mail($email, 'Welcome to AI GPU Cloud Newsletter', 'Thank you for subscribing...');
        
        http_response_code(201);
        sendResponse(true, 'Newsletter subscription successful', [
            'id' => $subscriptionId
        ]);
    }
    
} catch (PDOException $e) {
    error_log("Newsletter subscription error: " . $e->getMessage());
    http_response_code(500);
    sendResponse(false, 'Failed to subscribe to newsletter');
}
?>