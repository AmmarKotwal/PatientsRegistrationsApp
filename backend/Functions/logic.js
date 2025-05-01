let patients = require("../Collections/patients");

let all_functions = {
    Home : async function (req,res) {
        res.send("Home Page");
        res.end();
    },

    register_patients : async function (req,res) {
     try {
         let {Full_Name,Age,Gender,Phone_Number,Address} = req.body;
         let checkPhoneNum = await patients.findOne({Phone_Number: Phone_Number})
         if (checkPhoneNum) {
             return res.status(409).json({msg: "Phone Number Already Exist"});
         } else {
             let patient_data = new patients ({Full_Name,Age,Gender,Phone_Number,Address});
             let register_patient = await patient_data.save();
             res.status(200).json({msg: "Patient Data Has Been Registered Successfully", data: register_patient});
         }        
     } catch (error) {
         res.status(501).json({msg: error.message});
     }
    },

    show_data : async function (req, res) {
        try {
            let getPatient_data = await patients.find();
            res.status(201).json(getPatient_data);
        } catch (error) {
            res.status(501).json({msg: error.message})
        }
   }
 }
  
 module.exports = all_functions;
