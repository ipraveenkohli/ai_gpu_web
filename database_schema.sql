-- AI GPU Rental Platform Database Schema
-- MySQL Database Schema for PHP Backend

-- Create database
CREATE DATABASE IF NOT EXISTS ai_gpu_rental CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ai_gpu_rental;

-- Users/Customers table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    phone VARCHAR(50),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    status ENUM('new', 'in_progress', 'resolved', 'closed') DEFAULT 'new',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Quote requests
CREATE TABLE IF NOT EXISTS quote_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    gpu_type VARCHAR(100) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    duration_hours INT,
    use_case ENUM('training', 'inference', 'research', 'development', 'other') NOT NULL,
    estimated_budget DECIMAL(10, 2),
    project_description TEXT,
    start_date DATE,
    requirements TEXT,
    status ENUM('pending', 'reviewed', 'quoted', 'approved', 'rejected') DEFAULT 'pending',
    quoted_price DECIMAL(10, 2),
    admin_notes TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_gpu_type (gpu_type),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- GPU inventory
CREATE TABLE IF NOT EXISTS gpu_inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model_name VARCHAR(255) NOT NULL,
    gpu_type VARCHAR(100) NOT NULL,
    vram_gb INT NOT NULL,
    compute_capability VARCHAR(20),
    total_units INT NOT NULL DEFAULT 0,
    available_units INT NOT NULL DEFAULT 0,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    daily_rate DECIMAL(10, 2),
    monthly_rate DECIMAL(10, 2),
    performance_tflops DECIMAL(10, 2),
    memory_bandwidth_gbps INT,
    specifications JSON,
    status ENUM('active', 'maintenance', 'discontinued') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_gpu_type (gpu_type),
    INDEX idx_status (status),
    INDEX idx_available_units (available_units)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Rental/Booking orders
CREATE TABLE IF NOT EXISTS rental_orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    quote_request_id INT,
    gpu_inventory_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    start_datetime DATETIME NOT NULL,
    end_datetime DATETIME NOT NULL,
    total_hours DECIMAL(10, 2) NOT NULL,
    hourly_rate DECIMAL(10, 2) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'active', 'completed', 'cancelled') DEFAULT 'pending',
    payment_status ENUM('pending', 'paid', 'refunded', 'failed') DEFAULT 'pending',
    payment_method VARCHAR(50),
    transaction_id VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (quote_request_id) REFERENCES quote_requests(id) ON DELETE SET NULL,
    FOREIGN KEY (gpu_inventory_id) REFERENCES gpu_inventory(id),
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_start_datetime (start_datetime),
    INDEX idx_payment_status (payment_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Newsletter subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    status ENUM('active', 'unsubscribed') DEFAULT 'active',
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Usage logs for tracking GPU utilization
CREATE TABLE IF NOT EXISTS usage_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    rental_order_id INT NOT NULL,
    gpu_utilization_percent DECIMAL(5, 2),
    memory_used_gb DECIMAL(10, 2),
    power_consumption_watts INT,
    temperature_celsius INT,
    logged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (rental_order_id) REFERENCES rental_orders(id) ON DELETE CASCADE,
    INDEX idx_rental_order_id (rental_order_id),
    INDEX idx_logged_at (logged_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample GPU data
INSERT INTO gpu_inventory (model_name, gpu_type, vram_gb, compute_capability, total_units, available_units, hourly_rate, daily_rate, monthly_rate, performance_tflops, memory_bandwidth_gbps, specifications) VALUES
('NVIDIA H100', 'H100 SXM5', 80, '9.0', 50, 45, 4.50, 100.00, 2800.00, 989, 3352, '{"tensor_cores": "4th Gen", "nvlink": "900 GB/s", "pcie": "Gen5"}'),
('NVIDIA A100', 'A100 SXM4', 80, '8.0', 100, 85, 3.00, 65.00, 1800.00, 624, 2039, '{"tensor_cores": "3rd Gen", "nvlink": "600 GB/s", "pcie": "Gen4"}'),
('NVIDIA A100', 'A100 PCIe', 40, '8.0', 150, 120, 2.50, 55.00, 1500.00, 312, 1555, '{"tensor_cores": "3rd Gen", "pcie": "Gen4"}'),
('NVIDIA V100', 'V100 SXM2', 32, '7.0', 80, 60, 1.80, 40.00, 1100.00, 125, 900, '{"tensor_cores": "1st Gen", "nvlink": "300 GB/s"}'),
('NVIDIA RTX 4090', 'RTX 4090', 24, '8.9', 200, 180, 1.20, 25.00, 700.00, 83, 1008, '{"ray_tracing": "3rd Gen", "dlss": "3.0"}'),
('NVIDIA RTX A6000', 'RTX A6000', 48, '8.6', 120, 100, 2.00, 45.00, 1250.00, 40, 768, '{"ray_tracing": "2nd Gen", "ecc_memory": true}'),
('NVIDIA L40', 'L40', 48, '8.9', 100, 85, 2.20, 48.00, 1350.00, 90, 864, '{"ray_tracing": "3rd Gen", "av1_encode": true}'),
('AMD MI250X', 'MI250X', 128, 'CDNA2', 40, 30, 3.50, 75.00, 2100.00, 383, 3277, '{"matrix_cores": "CDNA2", "infinity_fabric": true}');