const mongoose = require("mongoose");
const DoctorSchema= mongoose.Schema({
   
    username:{
        type: "string",
        require: "true"
    },
    number:{
        type: "number",
        require: "true",
        unique: "true",
    }
});

module.exports=DoctorSchema;