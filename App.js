const express = require("express");
const route = require("./Route/route");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors({
    origin:"*"
}))

app.get("/", (req, res)=>{
    res.send("Login Page")
})

app.get("/register", (req, res)=>{
    res.send("Registration Page")
})

app.use(route)

app.listen(8080, ()=>{
    console.log("Server is Running")
})