
# ai_gpu_web
=======
# AI GPU Cloud - Enterprise GPU Rental Platform

A modern, futuristic AI GPU rental website built with React, TypeScript, TailwindCSS, and PHP/MySQL backend. Features 3D GPU animations, responsive design, and complete booking/quotation system.

## 🚀 Features

- **Modern UI/UX**: Futuristic design with glassmorphism effects and smooth animations
- **3D GPU Visualization**: Interactive 3D GPU model using Three.js
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Complete Booking System**: Quote requests, contact forms, and newsletter subscriptions
- **Database Integration**: PHP/MySQL backend with complete schema
- **Multiple Pages**:
  - Home page with hero section and feature highlights
  - Services page detailing GPU offerings
  - Pricing page with dynamic pricing tables
  - Contact form with database integration
  - Quote request system
  - About page with company information

## 📋 Prerequisites

- Node.js 18+ or Bun
- PHP 7.4+ (for backend API)
- MySQL 5.7+ or MariaDB 10.3+
- Web server (Apache/Nginx) for production

## 🔧 Installation

### 1. Clone and Install Dependencies

```bash
# Install frontend dependencies
bun install
# or
npm install
```

### 2. Database Setup

```bash
# Import the database schema
mysql -u your_username -p < database_schema.sql
```

This will create:
- Database: `ai_gpu_rental`
- Tables: users, contact_submissions, quote_requests, gpu_inventory, rental_orders, newsletter_subscriptions, usage_logs
- Sample GPU data

### 3. Configure PHP Backend

Edit `/api/config.php` with your database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'ai_gpu_rental');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
```

### 4. Backend API Endpoints

The following PHP API endpoints are available:

- `POST /api/contact.php` - Contact form submissions
- `POST /api/quote.php` - Quote requests
- `POST /api/newsletter.php` - Newsletter subscriptions
- `GET /api/gpus.php` - GPU inventory listing

### 5. Development Server

```bash
# Start development server
bun run dev
# or
npm run dev
```

Visit `http://localhost:5173`

## 🗄️ Database Schema

### Main Tables

**users**: Customer/user accounts
- id, email, full_name, company_name, phone, country
- Timestamps: created_at, updated_at

**contact_submissions**: Contact form data
- id, full_name, email, phone, company, subject, message
- status, ip_address, user_agent
- Timestamps: created_at, updated_at

**quote_requests**: GPU rental quotes
- id, full_name, email, phone, company
- gpu_type, quantity, duration_hours, use_case
- estimated_budget, project_description, requirements
- status, quoted_price, admin_notes
- Timestamps: created_at, updated_at

**gpu_inventory**: Available GPUs
- id, model_name, gpu_type, vram_gb
- total_units, available_units
- hourly_rate, daily_rate, monthly_rate
- performance_tflops, specifications (JSON)
- status

**rental_orders**: Booking records
- id, user_id, gpu_inventory_id, quantity
- start_datetime, end_datetime, total_hours
- total_amount, status, payment_status
- Timestamps: created_at, updated_at

**newsletter_subscriptions**: Newsletter emails
- id, email, status, ip_address
- Timestamps: created_at, updated_at

## 🎨 Frontend Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with newsletter
│   ├── GPU3D.tsx          # 3D GPU visualization
│   └── ui/                # shadcn components
├── pages/
│   ├── HomePage.tsx       # Landing page
│   ├── ServicesPage.tsx   # Services overview
│   ├── PricingPage.tsx    # GPU pricing tables
│   ├── ContactPage.tsx    # Contact form
│   ├── QuotePage.tsx      # Quote request form
│   └── AboutPage.tsx      # About company
├── App.tsx               # Main app with routing
└── app.css              # Theme & animations
```



Built with ❤️ by Praveen

