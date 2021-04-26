
const mongoose =require('mongoose');
const User= require('./dialogUsersList');


var Schema = mongoose.Schema;


const DialogDetailsSchema=new mongoose.Schema({
   _id: {
       type:String,
   },
  
    Firstname:{
                type:String,
                required:true
            },
    LastName:{
                type:String,
                required:true
            },
    CompanyName:{
                type:String,
                required:true
            },
    Department:{
                type:String,
                required:true
            },
    EmailAddress:{
               type:String,
              required:true
            },
    PhoneNumber:{
                type:String,
                required:true
            },
    MobileNumber:{
                type:String,
                required:true
            },
    Language:{
                type:String,
                required:true
            },
    TimeZone:{
                type:String,
                required:true
            },
    Addressline1:{
                type:String,
                required:true
            },
    Addressline2:{
                type:String,
                required:true
            },
    City:{
                type:String,
                required:true
            },
    State:{
                type:String,
                required:true
            },
    Country:{
                type:String,
                required:true
            },
        merchantId:
        {
            type:String,
            required:true
        },
      
         
})
const UserDetails=mongoose.model('UserDetails',DialogDetailsSchema);
module.exports=UserDetails;