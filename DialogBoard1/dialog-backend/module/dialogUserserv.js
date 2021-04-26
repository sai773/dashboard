const mongoose =require('mongoose');

var Schema = mongoose.Schema;


const DialogUserservSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
         
    
    emailAddress: {
        type:String,
   
        required:true
      },
   merchantId:{
       type:String,
       required:true
   },
});

const Userserv=mongoose.model('Userserv',DialogUserservSchema);
module.exports=Userserv;