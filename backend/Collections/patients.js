let mongo = require("mongoose");

let patient_model = mongo.Schema({
    Full_Name : {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true,
    },
    Gender: {
        type: String,
        required: true
    },
    Phone_Number: {
        type: String,
        required: true
    },
    Address: {
        type: String,
    },
    Registration_Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("Patient",patient_model);