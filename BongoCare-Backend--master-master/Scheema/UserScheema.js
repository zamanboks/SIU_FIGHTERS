const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const userSchema= mongoose.Schema({
 
    username:{
        type: "string",
        require: "true",
        unique: "true",
    },
    email:{
        type: "string",
        require: "true",
        unique: "true"
    },
    institution:{
        type: "string",
        require: "true",
        unique: "true"
    },
    class:{
        type: "number",
        require: "true",
        unique: "true"
    },
    age:{
        type: "number",
        require: "true",
        unique: "true"
    },

    password:{
        type:"string",
        require: "true"
    },
    confirmpassword:{
        type:"string",
        require: "true"
    }
});
userSchema.plugin(uniqueValidator);
module.exports=userSchema;