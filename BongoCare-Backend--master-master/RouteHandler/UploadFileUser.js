const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
const fs = require('fs-extra')
const UpoladSchema = require("../Scheema/UploadFileUser");
const UserUpload= new mongoose.model("UploadFileUser", UpoladSchema);
const CheakLoginControler = require('../MiddleWears/CheakLoginControler');
const fileUpload = require('express-fileupload')
const Uploadss=  express.static('Uploads');
router.post("/UserReport",fileUpload(),async(req,res)=>{
  const file= req.files.File;
const name= req.body.name;
const testName= req.body.testName;
const date= req.body.date;
console.log(date)
  console.log(req.files.File)
  const filepath= `${__dirname}/../UploadsTestReport/${file.name}`;
    file.mv(filepath ,async err=>{
      try {
        var newImg=fs.readFileSync(filepath);
        const encImg= newImg.toString('base64');
        var Img= Buffer.from(encImg,'base64');
        console.log(Img)
        const TestReport = new UserUpload({
          name: name,
          testName: testName,
          img: Img ,
          date: date,
      });
      await TestReport.save();
        return res.status(200).json({msg : "File Upload Suceessfully"})
      } catch (err) {
        console.log(err)
        return res.status(500).json({msg:'Fild to upload image'});
      }
    })
  

 })


 router.get("/ReportPost",async(req,res)=>{
  try {  
      const user = await UserUpload.find({name: req.query.username});

      // console.log(user)
      if(user&&user.length>0){
          res.send(user)
      }
      
  } catch (error) {
      res.status(500).json({
          "error": "Something Is Wrong Please Try Again"
      }); 
  }

   
})
router.get("/UploadReportPost",async(req,res)=>{
  try {  
      const user = await UserUpload.find({});

      // console.log(user)
      if(user&&user.length>0){
          res.send(user)
      }
      
  } catch (error) {
      res.status(500).json({
          "error": "Something Is Wrong Please Try Again"
      }); 
  }

   
})
router.get("/ReportImg",async(req,res)=>{
  console.log(req.query.id)
  try {  
      const user = await UserUpload.find({_id: ObjectId(req.query.id)});
       console.log(user)
      if(user&&user.length>0){
          res.send(user)
      }
      
  } catch (error) {
      res.status(200).json({
        "error": "Something Is Wrong Please Try Again"
      }); 
  }

   
})
router.delete('/delete/:id',async(req,res)=>{
  console.log(req.params.id)
  UserUpload.deleteOne({_id: req.params.id},
      (err) => {
          if (err) {
            res.status(500).json({
              error: "There was a server side error!",
            });
          } else {
            res.status(200).json({
            
              message: "Delete SUccessfully",
            });
          }
        }
      )
})


module.exports = router;