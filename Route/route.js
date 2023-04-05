const route = require("express").Router()
const bcrypt = require("bcrypt")
const saltround=10;
const arr = [];

route.post("/register", async(req, res)=>{
    // res.send("register")
    const data = req.body;
    console.log((data))
    const hashpassword = await bcrypt.hash(data.password, saltround)
    // res.send(hashpassword)

    const obj = {
        email : data.email,
        password : hashpassword
    }
    arr.push(obj)
    res.send(arr)
})

route.post("/login", (req, res)=>{
    // res.send("login")
    arr.forEach(async(data)=>{
        if(req.body.email===data.email){
            const validate = await bcrypt.compare(req.body.password, data.password)
            if (validate){
                res.send({msg : "successfully logged in"})
            }
            else {
                res.send({msg : "password is wrong"})
            }
        }
    })
})

module.exports = route;