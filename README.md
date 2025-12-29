<<<<<<< HEAD
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

## 🎯 API Usage Examples

### Contact Form Submission

```javascript
const response = await fetch('/api/contact.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    company: 'Tech Corp',
    subject: 'GPU Rental Inquiry',
    message: 'I need GPUs for AI training...'
  })
});
```

### Quote Request

```javascript
const response = await fetch('/api/quote.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1234567890',
    company: 'AI Startup',
    gpuType: 'h100',
    quantity: 8,
    durationHours: 720,
    useCase: 'training',
    projectDescription: 'Training large language model...',
    startDate: '2024-02-01'
  })
});
```

### Get GPU Inventory

```javascript
// Get all active GPUs
const response = await fetch('/api/gpus.php?status=active');

// Filter by availability and price
const response = await fetch('/api/gpus.php?available_only=true&max_price=3.00');
```

## 🎨 Theming

The application uses a futuristic dark theme with cyan and purple accents. Colors are defined in `/src/app.css`:

```css
:root {
  --background: oklch(0.12 0.02 250);  /* Deep space blue */
  --foreground: oklch(0.98 0.01 250);  /* Light text */
  --primary: oklch(0.65 0.25 195);     /* Cyan accent */
  --accent: oklch(0.60 0.22 280);      /* Purple accent */
  /* ... more colors */
}
```

## 🚀 Deployment

### Frontend (Vite Build)

```bash
bun run build
# Deploy the 'dist' folder to your hosting
```

### Backend (PHP)

1. Upload `/api` folder to your web server
2. Configure web server to handle PHP files
3. Update CORS settings in `config.php` if needed
4. Ensure proper file permissions

### Apache Configuration Example

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/html
    
    # Frontend
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # API
    <Directory /var/www/html/api>
        Options -Indexes
        AllowOverride None
        Require all granted
    </Directory>
</VirtualHost>
```

## 📊 Sample GPU Data

The schema includes 8 pre-configured GPU types:
- NVIDIA H100 (80GB) - $4.50/hr
- NVIDIA A100 (80GB) - $3.00/hr
- NVIDIA A100 (40GB) - $2.50/hr
- NVIDIA V100 (32GB) - $1.80/hr
- NVIDIA RTX 4090 (24GB) - $1.20/hr
- NVIDIA RTX A6000 (48GB) - $2.00/hr
- NVIDIA L40 (48GB) - $2.20/hr
- AMD MI250X (128GB) - $3.50/hr

## 🔒 Security Notes

- All form inputs are sanitized in PHP
- SQL injection protection via prepared statements
- Email validation on both frontend and backend
- IP address logging for audit trails
- CORS headers configured in API
- XSS protection via htmlspecialchars

## 📝 Environment Variables

For production, consider using environment variables:

```php
// config.php
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_NAME', getenv('DB_NAME') ?: 'ai_gpu_rental');
define('DB_USER', getenv('DB_USER') ?: 'your_username');
define('DB_PASS', getenv('DB_PASS') ?: 'your_password');
```

## 🛠️ Technology Stack

**Frontend:**
- React 19
- TypeScript
- TailwindCSS 4
- Framer Motion (animations)
- Three.js + React Three Fiber (3D graphics)
- Wouter (routing)
- shadcn/ui (components)
- Sonner (toasts)

**Backend:**
- PHP 7.4+
- MySQL 5.7+
- PDO (database)

## 📄 License

This project is provided as-is for demonstration purposes.

## 🤝 Support

For issues or questions, please contact support@aigpucloud.com

## 🔄 Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- User authentication and dashboard
- Real-time GPU availability updates
- Usage analytics and monitoring
- Admin panel for managing quotes/bookings
- Email notification system
- Multi-language support
- Dark/light theme toggle

---

Built with ❤️ for the AI community
>>>>>>> 59181ea (Initial commit)
