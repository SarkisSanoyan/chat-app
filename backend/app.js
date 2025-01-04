import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/auth.js";
import messageRoute from "./routes/chat.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";
dotenv.config({});

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOption));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening on port: ${PORT}`);
});

