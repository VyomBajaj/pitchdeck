import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoute.js";
import startupRoutes from "./routes/startupRoute.js";
import investorRoutes from "./routes/investorRoute.js";
import authRoutes from "./routes/authRoute.js";
import startupFilterRoute from './routes/startupFilterRoutes.js';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import {socketAuth} from './middlewares/socketMiddleware.js';
import chatRoute from './routes/chatRoute.js';
import messageRoute from './routes/messageRoute.js';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const PORT = 8000 || process.env.PORT;

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.use(socketAuth);

io.on("connection", (socket) => {
  console.log("User Connected", socket.user.id);

  socket.on("joinRoom", (chatId) => {
    socket.join(chatId);
  });

  socket.on("sendMessage", async (data) => {
    io.to(data.chatId).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.use("/api/users", userRoutes);
app.use("/api/startups", startupRoutes);
app.use("/api/investors", investorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/startupsfilter",startupFilterRoute);


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected");
        
    } catch (error) {
        console.log("Error",error);
        
    }
}





app.listen(PORT,()=>{
    console.log("Server started at Port 8000");
    connectDB();
})