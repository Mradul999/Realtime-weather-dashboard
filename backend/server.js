import express from "express";
const app = express();
import dotenv from "dotenv";
import { getWeather } from "./routes/weatherRoute.js";
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 4001;

//routes

app.post("/weather", getWeather);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
