const mongoose =require('mongoose');
const User=require('../module/dialogUsersList');
const UserDetails=require('../module/dialoguserDetails');


const DialogServiceSchema=mongoose.Schema({

    _id: {
        type:String,
    },


    
    merchantId:{
        type:String,
        required:true
    },


     ServiceName:{
         type:String,
         required:true,
        },
    ServiceDesc:{
        type:String,
        required:true,
       },
    ServiceType: {
        type:String,
        required:true,
       },
      
    Country:{
        type:String,
        required:true,
       },
    txtAccessperiod:{
        type:String,
        required:true,
       },
    ddlAccessperiod:{
        type:String,
        required:true,
       },


  
    ddlFallbackpr1:{
        type:String,
        required:true,
       },
    txtFallbackperiod1:{
        type:String,
        required:true,
       },
    ddlFallbackperiod1:{
        type:String,
        required:true,
       },
   
   
  
    ddlFallbackpr2:{
        type:String,
        required:true,
       },
    txtFallbackperiod2:{
        type:String,
        required:true,
       },
    ddlFallbackperiod2:{
        type:String,
        required:true,
       },
   

  
    txtfreetrail:{
        type:String,
        required:true,
       },
    ddlfreetrailperiod:{
        type:String,
        required:true,
       },
    

    ddlTps:{
        type:String,
        required:true,
       },

    ServiceimgUrl: {
        type:String,
        required:true,
       },
    RedirectionUrl:{
        type:String,
        required:true,
       },
    CallbackUrl: {
        type:String,
        required:true,
       },
    SerValidationUrl: {
        type:String,
        required:true,
       },
    SerUnSubSCode:{
        type:String,
        required:true,
       },
    SerUnsubId:{
        type:String,
        required:true,
       },
    MHelplineno: {
        type:String,
        required:true,
       },
    MSupEmailid: {
        type:String,
        required:true,
       },
    ReceiptMessage: {
        type:String,
        required:true,
       },
    WelcomeMessage:{
        type:String,
        required:true,
       },
    NotificationMessage:{
        type:String,
        required:true,
       },
       UnSubMessage:{
           type:String,
           required:true
       },
       ServiceRoutingSettings:{
           type:String,
           required:true,
       },
       consumerkey:{
           type:String,
           required:true,
       },
       consumerkey1:{
        type:String,
        required:true,
    },
    merchantName:{
        type:String,
        required:true,

    }
     
});

const UserService=mongoose.model('UserService',DialogServiceSchema);
module.exports=UserService;
