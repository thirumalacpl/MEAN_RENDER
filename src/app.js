import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoute.js';

dotenv.config()
connectDB();

const PORT = 5001;

const app = express() // creating one instance

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/users", userRoutes) // creat user


// get method
app.get("/", (req, res) => {
    res.send("okay");

})


// custom error middle ware

// app.get("/api", (req,res)=>{
//     throw new Error("something went wrong"); // html error
// })

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`server running on port ${PORT}`))