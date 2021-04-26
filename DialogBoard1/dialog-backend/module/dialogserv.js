const mongoose =require('mongoose');

var Schema = mongoose.Schema;


const DialogservSchema=new mongoose.Schema({
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

const serv=mongoose.model('serv',DialogUserservSchema);
module.exports=serv;