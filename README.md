# Full Stack E-commerce Product Listing Application for - LearnlyApp

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Frontend Structure](#frontend-structure)
- [Backend Structure](#backend-structure)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

### see the live working app at : https://ecommerce-product-listing-app.vercel.app/

## Introduction

This is a simple e-commerce product listing application with functionalities for product listing, searching, adding, updating, and deleting products, as well as user authentication.

## Features

- **Product Listing**: Displays products with details such as name, description, price, and image.
- **Add New Products**: Authenticated users can add new products.
- **Search Products**: Filter products by name using a search bar.
- **User Authentication**: Login form for user authentication.
- **Responsive Design**: Ensures compatibility across different devices.
- **CRUD Operations**: Provides CRUD operations for products.
- **OOP based Architecture**: Follows the Object-Oriented Programming (OOP) principles for the backend.

## Technologies Used

- **Frontend**: Vue.js, Vue Router, Vuex, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB/Mongoose
- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB (or a cloud instance)

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/ecommerce-product-listing.git
   cd ecommerce-product-listing
   ```

2. **Install dependencies for both frontend and backend:**
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Configure Environment Variables:**

   Create a \`.env\` file in the \`backend\` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Frontend Structure


### Tailwind CSS

Tailwind CSS is used for styling. Custom styles are applied using Tailwind's utility classes.

### Vuex

Vuex is used for state management, particularly to manage products and user authentication state.

## Backend Structure

### Routes

- `/api/products\`: CRUD operations for products.
- `/api/users\`: User authentication.

### Middlewares

- \`authMiddleware.js\`: Middleware to protect routes.

### Models

- \`User.js\`: User schema.
- \`Product.js\`: Product schema.

## API Endpoints

### Products

- **GET /api/products**: Get all products.
- **POST /api/products**: Add a new product (protected).
- **PUT /api/products/:id**: Update a product (protected).
- **DELETE /api/products/:id**: Delete a product (protected).

### Users

- **POST /api/users/login**: User login.

## Running the Application

### Development

1. **Run the backend server:**
   ```sh
   cd backend
   npm run dev
   ```

2. **Run the frontend server:**
   ```sh
   cd frontend
   npm run serve
   ```

### Production

1. **Build the client:**
   ```sh
   cd client
   npm run build
   ```

2. **Run the backend server:**
   ```sh
   cd server
   npm start
   ```

## License

This project is licensed under the MIT License. You can find the license details in the LICENSE file.