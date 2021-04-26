const mongoose =require('mongoose');

var Schema = mongoose.Schema;


const DialogUserrrSchema=new mongoose.Schema({
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

const Userr=mongoose.model('Userr',DialogUserrrSchema);
module.exports=Userr;