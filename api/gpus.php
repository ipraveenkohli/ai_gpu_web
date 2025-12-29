<?php
/**
 * GPU Inventory API
 * Returns available GPUs and their pricing information
 */

require_once 'config.php';

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    sendResponse(false, 'Method not allowed');
}

try {
    $pdo = getConnection();
    
    // Get filter parameters
    $status = isset($_GET['status']) ? sanitizeInput($_GET['status']) : 'active';
    $gpuType = isset($_GET['type']) ? sanitizeInput($_GET['type']) : null;
    $minVram = isset($_GET['min_vram']) ? intval($_GET['min_vram']) : null;
    $maxPrice = isset($_GET['max_price']) ? floatval($_GET['max_price']) : null;
    $availableOnly = isset($_GET['available_only']) && $_GET['available_only'] === 'true';
    
    // Build query
    $sql = "SELECT id, model_name, gpu_type, vram_gb, compute_capability, 
                   total_units, available_units, hourly_rate, daily_rate, monthly_rate,
                   performance_tflops, memory_bandwidth_gbps, specifications, status
            FROM gpu_inventory 
            WHERE status = :status";
    
    $params = [':status' => $status];
    
    if ($gpuType) {
        $sql .= " AND gpu_type = :gpu_type";
        $params[':gpu_type'] = $gpuType;
    }
    
    if ($minVram) {
        $sql .= " AND vram_gb >= :min_vram";
        $params[':min_vram'] = $minVram;
    }
    
    if ($maxPrice) {
        $sql .= " AND hourly_rate <= :max_price";
        $params[':max_price'] = $maxPrice;
    }
    
    if ($availableOnly) {
        $sql .= " AND available_units > 0";
    }
    
    $sql .= " ORDER BY hourly_rate DESC";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $gpus = $stmt->fetchAll();
    
    // Parse JSON specifications
    foreach ($gpus as &$gpu) {
        if ($gpu['specifications']) {
            $gpu['specifications'] = json_decode($gpu['specifications'], true);
        }
        
        // Calculate availability percentage
        $gpu['availability_percent'] = $gpu['total_units'] > 0 
            ? round(($gpu['available_units'] / $gpu['total_units']) * 100, 2)
            : 0;
    }
    
    http_response_code(200);
    sendResponse(true, 'GPUs retrieved successfully', [
        'gpus' => $gpus,
        'count' => count($gpus)
    ]);
    
} catch (PDOException $e) {
    error_log("GPU inventory error: " . $e->getMessage());
    http_response_code(500);
    sendResponse(false, 'Failed to retrieve GPU inventory');
}
?>