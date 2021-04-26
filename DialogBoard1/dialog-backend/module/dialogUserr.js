const mongoose =require('mongoose');

var Schema = mongoose.Schema;


const DialogUserrSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
         
    
    emailAddress: {
        type:String,
   
        required:true
      },
   password:{
       type:String,
       required:true
   },
});

const Userr=mongoose.model('Userr',DialogUserrSchema);
module.exports=Userr;