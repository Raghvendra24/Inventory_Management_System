Inventory Management System

A full-stack Inventory Management System built using Spring Boot (Backend) and React + Vite (Frontend).
This system helps track products, suppliers, categories, and inventory movements with clean UI and powerful backend APIs.

🚀 Features
🔹 Dashboard

Total number of products

Total quantity in stock

Total inventory value

Low stock alerts

🔹 Product Management

Add, update, delete products

Auto-calculated inventory value

SKU, category, price, supplier, and stock tracking

🔹 Category Management

Create and manage product categories

Category descriptions

Fully integrated with product module

🔹 Supplier Management

Manage supplier details (name, email, phone)

Linked with product module

🔹 Transactions

Record Incoming & Outgoing stock movements

Automatically updates product stock quantities

Tracks date, quantity, type, and notes

🏗️ Tech Stack
Backend (Spring Boot)

Java 17

Spring Boot

Spring Data JPA

MySQL

Lombok

Validation (Jakarta)

Exception Handling

REST API Architecture

Frontend (React + Vite)

React JS

Vite

Axios

React Router

Tailwind / Custom CSS

Component-based architecture

📁 Project Structure

inventory-management-system/
│
├── backend/
│   ├── src/main/java/com/raghvendra/inventory/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   ├── exception/
│   │   └── InventoryManagementSystemApplication.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── .env
│   ├── vite.config.js
│   └── package.json
│
└── README.md
Setup Instructions
🔧 Backend Setup (Spring Boot)
1️⃣ Configure MySQL

Create a database:

CREATE DATABASE inventory_db;

2️⃣ Configure application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/inventory_db
spring.datasource.username=root
spring.datasource.password=your_db_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

3️⃣ Run the Backend
mvn spring-boot:run


Backend runs at:

http://localhost:8080

🎨 Frontend Setup (React + Vite)
1️⃣ Install Dependencies
npm install

2️⃣ Create .env File
VITE_API_BASE_URL=http://localhost:8080/api

3️⃣ Start the Frontend
npm run dev


Frontend runs at:

http://localhost:5173

🔗 API Endpoints Overview
Products
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add new product
GET	/api/products/{id}	Get product by ID
PUT	/api/products/{id}	Update product
DELETE	/api/products/{id}	Delete product
Categories
Method	Endpoint
GET /api/categories	
POST /api/categories	
PUT /api/categories/{id}	
DELETE /api/categories/{id}	
Suppliers
Method	Endpoint
GET /api/suppliers	
POST /api/suppliers	
PUT /api/suppliers/{id}	
DELETE /api/suppliers/{id}	
Transactions
Method	Endpoint
GET /api/transactions	
POST /api/transactions	
GET /api/transactions/{id}	
Dashboard
GET /api/dashboard/summary

Developer Notes

Use VITE_API_BASE_URL in frontend for clean API usage

Transaction module automatically updates stock

Backend is modular and scalable

Data can be auto-loaded using data.sql

📜 License

This project is open-source and available under the MIT License.
