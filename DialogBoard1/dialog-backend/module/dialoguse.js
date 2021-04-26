const mongoose =require('mongoose');

var Schema = mongoose.Schema;


const DialogUseSchema=new mongoose.Schema({
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

const Use=mongoose.model('Use',DialogUseSchema);
module.exports=Use;