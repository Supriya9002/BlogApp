BlogApp

BlogApp is a full-stack blogging application that allows users to create, edit, and delete blog posts. The project consists of a React.js frontend and an Express.js backend using MongoDB for data storage.

Table of Contents

Project Overview

Features

Tech Stack

Project Structure

Installation

Running Locally

Deployment

Environment Variables

License

Project Overview

BlogApp is designed to allow users to write and manage blog posts with an intuitive interface. It is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application where the backend provides APIs for blog management, and the frontend offers a user-friendly interface for blog interactions.

Features

Create, read, update, and delete (CRUD) blog posts.

Responsive user interface.

RESTful API for backend operations.

MongoDB for data storage.

Tech Stack

Frontend:

React.js (JavaScript library)

Redux Toolkit (for state management)

React Router DOM (for routing)

HTML/CSS (for layout and design)

Backend:

Node.js (JavaScript runtime)

Express.js (backend framework)

MongoDB (NoSQL database)

Mongoose (for MongoDB object modeling)

CORS (Cross-Origin Resource Sharing)

dotenv (for environment variables)

Project Structure

BlogApp/
│
├── backend/
│   ├── src/
│   │   ├── Blog/
│   │   │   ├── blog.controller.js
│   │   │   ├── blog.model.js
│   │   │   ├── blog.routes.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   ├── package.json
│
└── README.md

## Installation

### Prerequisites
Make sure you have the following installed:

- Node.js
- MongoDB
- Git

### Steps

1. Clone the repository:
```bash
git clone https://github.com/Supriya9002/BlogApp.git

Navigate to the project directory:

cd BlogApp

Install backend dependencies:

cd backend
npm install

Install frontend dependencies:

cd ../frontend
npm install

Running Locally

Start the backend:

Navigate to the backend folder and run:

cd backend
npm start

Start the frontend:

Open a new terminal, navigate to the frontend folder, and run:

cd frontend
npm start

Access the application:

Visit http://localhost:3000 in your browser for the frontend.

Backend API can be accessed at http://localhost:5000/api.

Deployment

Deploying the Backend

Push the backend folder to a platform like Render or Heroku.

Set up environment variables in the hosting service.

Ensure the backend is running on the specified port (default is 5000).

Deploying the Frontend

Build the frontend for production:

cd frontend
npm run build

Deploy the frontend/build folder to a static hosting service like Netlify or Render.

Make sure the frontend uses the correct API URL of the deployed backend.

Environment Variables

Ensure to set up the following environment variables in a .env file in the backend:

MONGO_URI=your_mongodb_connection_string
PORT=5000

License

This project is licensed under the ISC License.
