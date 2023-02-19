const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.post("/enroll",(req,res)=>{
     console.log(req.body);
     res.status(200).send({"message" : "Data received"});
})

app.listen(PORT,()=>{
    console.log("Server is running at "+PORT)
}); 