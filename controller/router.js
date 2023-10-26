const express = require("express");
const studentRoute = express.Router();
const studentSchema = require("../model/schema");
const mongoose = require("mongoose"); 

studentRoute.post("/create-student",(req,res)=>{
	console.log("hello");
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

// studentRoute.get("/update-student/:id",(req,res)=>{})
// studentRoute.put("/update-student/:id",(req,res)=>{})


studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


// http://localhost/students/update-student/ and PUT method

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})



// studentRoute.route()
// .get()
// .put()

// studentRoute.delete()

module.exports = studentRoute;


/*

export default C1;

app.get() -> 
app.post() -> create
app.put() ->
app.delete() ->

app.use() -> whatever the request comes handle it particularly(we shold handle it with atmost accuracy)

*/

// http://localhost:4000/students/ -> All the records

// http://localhost:4000/students/update-student/653356eba302d536e71bc4a8 -> to get specific record
                                             //  (student id) different ids for diff people.