# Library Management System

[![Demo](https://img.shields.io/badge/Demo-ClickHere-blue)](https://book-nest-eosin-psi.vercel.app/)

Full-stack web application to manage books, track borrowings, and maintain organized library records.

---

## Project Type
**Fullstack**

## Features
- **User Authentication:** JWT-based login & registration
- **Book Management:** Add, remove, update books (Admin only)
- **Borrow & Return System:** Track borrowed books per user
- **User Profiles:** View borrowed books history
- **Search & Filter Books**
- **Role-based Access:** Admins can manage books & users

## Design Decisions / Assumptions
- Users must be authenticated to borrow or return books
- Only admins can add or remove books
- Each book can be borrowed by only one user at a time

## Screenshots
![Home Page](screenshots/home-page.png)

## Installation & Getting Started

### Prerequisites
- Node.js & npm installed
- MongoDB running locally or remotely

### Steps to Run
```bash
# Clone the repository
git clone https://github.com/your-repo/library-management.git
cd library-management

# Install dependencies
npm install

# Set up environment variables
# Create a .env file and add:
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key

# Start the server
npm start


## Usage
```bash
# Example usage
curl -X GET http://localhost:8080/books/all
```




## API Endpoints
### Authentication
- **POST** `/user/register` → Register a new user
- **POST** `/user/login` → Login and receive a token

### Books
- **GET** `/books/all` → Fetch all books
- **POST** `/books/add` → Add a new book *(Admin only)*
- **PATCH** `/books/borrow/:bookId` → Borrow a book *(User only)*
- **PATCH** `/books/return/:bookId` → Return a book *(User only)*

### User Profile
- **GET** `/user/:userId/borrowed-books` → View borrowed books of a user

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)

