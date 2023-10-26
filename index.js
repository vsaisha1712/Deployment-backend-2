const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/router");
const cors= require("cors");
const bodyParser= require("body-parser");

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test1:12345@cluster0.waa1ifm.mongodb.net/schooldb");
// mongodb+srv://test1:<password>@cluster0.waa1ifm.mongodb.net/ (change as) mongodb+srv://test1:12345@cluster0.waa1ifm.mongodb.net/schooldb
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured while connecting with db"));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/students",studentRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})