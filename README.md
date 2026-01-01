# AI_GPU_WEB

A production-ready Node.js application deployed on AWS EC2 using Nginx and CI/CD with GitHub Actions.

## 🚀 Deployment Status

⚠️ This project uses an **ephemeral deployment model** (test → deploy → destroy).
For cost optimization and security reasons, the EC2 instance is terminated after testing.

✅ Deployment has been successfully verified using:
- GitHub Actions CI/CD logs
- EC2 instance logs
- Nginx & Node.js runtime logs


## 🛠 Tech Stack
- Node.js
- Express.js
- Nginx (Reverse Proxy)
- AWS EC2 (Ubuntu)
- GitHub Actions (CI/CD)
- PM2 (Process Manager)

## 🏗 Architecture
Client → Nginx → Node.js App (PM2)

## ⚙️ CI/CD Pipeline
On every push to the `main` branch:
1. GitHub Actions runs tests
2. Builds the application
3. SSH into EC2
4. Pulls latest code
5. Restarts the app using PM2

## 📦 Deployment Steps
1. EC2 instance setup
2. Nginx configuration
3. Node.js app configuration
4. CI/CD pipeline setup

## 📸 Screenshots


## 🧠 What I Learned
- Setting up CI/CD pipelines
- Nginx as a reverse proxy
- Secure SSH deployment
- Managing Node apps with PM2


Built with ❤️ by Praveen

