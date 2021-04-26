const mongoose =require('mongoose');

var Schema = mongoose.Schema;


const Dialoguserview=new mongoose.Schema({
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

const Userview=mongoose.model('Userview',DialoguserviewSchema);
module.exports=Userview;