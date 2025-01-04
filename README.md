# Chat App

A real-time chat application built using React for the frontend and Node.js with Express for the backend. This app allows users to send and receive messages in real-time using **Socket.io**. It supports features like user authentication, message persistence with MongoDB, and responsive design with Tailwind CSS.

## Features

- **Real-time Messaging**: Chat with other users instantly using Socket.io for WebSocket communication.
- **User Authentication**: Secure login and registration system using JWT and bcrypt for password hashing.
- **Persistent Chat History**: Save chat messages to MongoDB, so they persist even after app restarts.
- **Responsive Design**: Use of Tailwind CSS for a modern, mobile-friendly UI.
- **Redux State Management**: Manage the application state globally using Redux and Redux Toolkit.
- **Real-time Notifications**: Instant message notifications with **react-hot-toast**.

## Tech Stack

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **Redux**: State management for consistent data flow across the app.
- **Socket.io-client**: Real-time bi-directional event-based communication.
- **Axios**: HTTP client to interact with backend APIs.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For routing and navigation in the app.

### Backend
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Minimalist web framework for building APIs.
- **Socket.io**: Real-time bi-directional event-based communication.
- **MongoDB & Mongoose**: NoSQL database to store user and chat data.
- **JWT**: For creating secure user authentication tokens.
- **Bcryptjs**: For hashing passwords before storing them.
- **Cors**: Middleware for handling cross-origin requests.
- **Dotenv**: For managing environment variables.

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- npm (v8+)
- MongoDB (if not using a cloud instance)

### 1. Clone the Repository
```bash
git clone https://github.com/SarkisSanoyan/chat-app.git
cd chat-app
```

### 2. Frontend Setup
Navigate to the frontend folder and install dependencies:
```bash
cd frontend
npm install
```
To run the frontend in development mode:
```bash
npm start
```
The frontend will be accessible at ```http://localhost:3000```.

### 3. Backend Setup
Navigate to the ```backend``` folder and install dependencies:
```bash
cd backend
npm install
```
Create a ```.env ``` file in the ```backend``` folder and configure the following environment variables:
```bash
PORT=your_port
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```
To run the backend in development mode:
```bash
npm run dev
```
The backend will be accessible at ```http://localhost:your_port```.

### 4. Usage
Register a new user or log in using the authentication system.
After logging in, you can send and receive real-time messages.
Messages will be stored in MongoDB and available on reconnect.
Enjoy chatting in a responsive UI!

## Scripts

### Frontend

```npm start```: Runs the app in development mode.

```npm build```: Builds the app for production.

```npm test```: Runs tests for the app.

### Backend

```npm run dev```: Starts the server with Nodemon for auto-reloading.

```npm start```: Starts the server without Nodemon.

```npm run build```: Installs the backend dependencies.

## File Structure

### Frontend

```plaintext
frontend/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── redux/
│   ├── App.js
│   ├── index.js
│   └── ...
└── package.json
```

### Backend
```plaintext
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── app.js
└── package.json
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

**Socket.io** for real-time communication.

**MongoDB** for data persistence.

**React, Tailwind CSS** for creating a responsive and beautiful user interface.
