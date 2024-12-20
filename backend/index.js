import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", (error)=>console.log(error));
db.once("open", ()=> console.log("Database Connected"))

app.use(cors());
app.use(express.json());

// route
app.use(UserRoute)




app.listen(5080, ()=> console.log("server is running"))