let exp = require("express");
require("dotenv").config();
let r = require("./Routings/route");
let db = require("./Db")
let c = require("cors")
let collection = require("./Collections/patients")
let myapp = exp();
let port = process.env.PORT || 7062;

myapp.use(c());
myapp.use(exp.json());
myapp.use("/api/patients",r);

let sending_data = async function () {
    try {
        collection.create({
            Full_Name: "Ammar Kotwal",
            Age: 22,
            Gender: "Male",
            Phone_Number: "03172323232",
            Address: "ABCDEFG"
        })
    } catch (e) {
        console.log(e)
    }
}

db().then(()=>{
    // sending_data();
    myapp.listen(port,()=>{
        console.log(`Server Is Running On http://localhost:${port}/api/patients`)
    })
}).catch((e)=>{
    console.log(e)
})
