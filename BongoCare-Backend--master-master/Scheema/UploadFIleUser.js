const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const UpoladSchema= mongoose.Schema({
  
    name:{
        type: "string",
        require: "true"
        
    },
    testName:{
        type: "string",
        require: "true"
    },
    img:{
       type: 'Buffer',
       require: "true"
    },
    date:{
        type: "string",
        require: "true"
    }
});
UpoladSchema.plugin(uniqueValidator);
module.exports=UpoladSchema;