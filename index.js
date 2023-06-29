import express from "express";
import path from "path";

const app = express();


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(4000, ()=> {
    console.log("this server is running http://localhost:4000/")
})