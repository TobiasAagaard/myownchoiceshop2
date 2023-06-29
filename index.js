import express from "express";
import dotenv from "dotenv";
import path from "path";

import InitRouter from "./Routes/init.router";

dotenv.config()

const app = express();

app.use(express.urlencoded({ extended: true}));


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(4000, ()=> {
    console.log("this server is running http://localhost:4000")
})