📊 Mini CRM – Customer Management System

A simple full-stack CRM (Customer Relationship Management) web application built using the MERN stack. This project helps manage leads/customers with authentication and full CRUD operations.

🚀 Features
🔐 User Login Authentication
👤 Add new leads/customers
📋 View all leads in dashboard
🔍 Search leads by name, email, or source
✏️ Update lead status (New / Contacted / Converted)
❌ Delete leads
📊 Dashboard with lead statistics
💾 MongoDB database integration

🛠️ Tech Stack
Frontend:

React.js
Axios
CSS

Backend:

Node.js
Express.js
MongoDB
Mongoose
JWT Authentication

📁 Project Structure
Mini CRM/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Login.js
│   │   ├── App.css
│   │   └── assets/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md

🌐 API Endpoints
Auth Routes
POST /login
Leads Routes
GET /api/leads → Get all leads
POST /api/leads/add → Add new lead
PUT /api/leads/:id → Update lead status
DELETE /api/leads/:id → Delete lead


📌 Future Improvements
Role-based access (Admin/User)
Advanced analytics dashboard
Email notifications
Better UI (Tailwind / Material UI)
Pagination & filtering

👨‍💻 Author

Niranjana M


If you like this project, don’t forget to ⭐ the repo!
