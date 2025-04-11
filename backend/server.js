import express from "express";
const app=express();
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());

const port=process.env.PORT||4001;






app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

