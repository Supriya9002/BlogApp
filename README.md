
# BlogApp

**BlogApp** is a full-stack blogging application that allows users to create, edit, and delete blog posts. The project consists of a **React.js frontend** and an **Express.js backend** using MongoDB for data storage.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [License](#license)

## Project Overview

BlogApp is designed to allow users to write and manage blog posts with an intuitive interface. It is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application where the backend provides APIs for blog management, and the frontend offers a user-friendly interface for blog interactions.

## Features

- Create, read, update, and delete (CRUD) blog posts.
- Responsive user interface.
- RESTful API for backend operations.
- MongoDB for data storage.

## Tech Stack

### Frontend:
- React.js (JavaScript library)
- Redux Toolkit (for state management)
- React Router DOM (for routing)
- HTML/CSS (for layout and design)

### Backend:
- Node.js (JavaScript runtime)
- Express.js (backend framework)
- MongoDB (NoSQL database)
- Mongoose (for MongoDB object modeling)
- CORS (Cross-Origin Resource Sharing)
- dotenv (for environment variables)

## Project Structure

```bash
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
│   ├── server.js
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
