var express=require('express');
var router=express.Router();
const mongoose =require('mongoose');
const crypto=require('crypto-js');
var bcrypt = require('bcrypt');

const User=require('../module/dialogUsersList');
const UserDetails=require('../module/dialoguserDetails');
const UserService=require('../module/dialogUserService');
//var sessionStorage = require('sessionStorage');

secretKey = "YourSecretKeyForEncryption&Descryption";
var BCRYPT_SALT_ROUNDS = 12;

 
router.get('/myincomeusers',(req,res,next)=>{
       
       User.find(function(err, users){
        if(err){
            res.json(err);
       }
        else{
            res.json(users);
        }
    });

 });

router.get('/myincomeService',(req,res,next)=>{
       
  UserDetails.find(function(err, usersDetails){
        if(err){
            res.json(err);
        }
        else{
            res.json(usersDetails);
        }
    });

 });






router.get('/myincomessservice',(req,res,next)=>{
       
  UserService.find(function(err, usersService){
        if(err){
            res.json(err);
        }
        else{
            res.json(usersService);
        }
    });

 });





 router.post('/user',(req, res, next)=>{
   //  console.log("user details enterd");
     let newUserDetails=new User({
         _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
         password: bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS),
         Name:req.body.Name,
         EmailAddress:req.body.EmailAddress,
         PhoneNumber:req.body.PhoneNumber,
          
         
    //.then(function(hashedPassword) {
       // return usersDB.saveUser(username, hashedPassword);
  //  })
         
        
 });

//var password= newUserDetails.pasword;
//console.log(password);
//bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
   // .then(function(hashedPassword) {
    //    return usersDB.saveUser(username, hashedPassword);
   // })
 
     newUserDetails.save((err, user)=>{
         if(err){
             res.json(err);
         }
         else{
             res.json({msg:'user added succesfully'});
         }
})
         
     });
//var password= newUserDetails.pasword;
//console.log(password);

router.post('/use',(req,res,next)=>{
       
  User.findOne({username:crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8),
  },function(err, results){


        if(err || !results){
            res.json(err);
        }
        else{
    res.json(crypto.AES.encrypt(results.merchantId,secretKey).toString());
      }

           
    });

  })
    
router.post('/use1',(req,res,next)=>{
       
  UserService.findOne({merchantId:crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8),
  },function(err, results){


        if(err || !results){
            res.json(err);
        }
        else{
 // res.json('true');
 UserService.find(function(err, usersService){
          if(err){
              res.json(err);
           }
           else{
                res.json(crypto.AES.encrypt(JSON.stringify(usersService),secretKey).toString());
            }
        });
    
 //   res.json(crypto.AES.encrypt(results.Firstname,secretKey).toString());
      }

           
    });

  })










router.post('/userr',(req,res,next)=>{

  User.findOne({username:crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8)},function(err, results){
   if(err || !results)
        {
            res.json(err);
        }
      
      else{

           var pass=crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8);
  
            bcrypt.compare(pass,results.password,function(err,resul){
             

            if(!resul){
                res.json('invalid password');
             }
              else{
             //   var update = {
              results.last_login_date=results.creation_date;
             
             // };
              //var options = {
               //   new: true
             // };
             // console.log(results.last_login_date);
             // console.log(last_login_date);
              //results.last_login_date = Date.now();
             // console.log(results.merchantId);
                //if(results.merchantId=="ashield"){
                //  res.json('yes');
                 //  }
             //   else{
              //    UserDetails.findOne({user:results.emailAddress,merchantId:results.merchantId},function(err, result){
     
                //   if(err || result) 
                //   {
                  //     res.json(true);
                   //}
      
                 // else{
                 //     res.json(false);
     
                   //    }
            
                // });
               // }
               
              res.json(true);
            }

            });

          }
    });

 });



router.post('/userrr',(req,res,next)=>{
      
  UserDetails.findOne({merchantId:crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8)
  //  merchantId:crypto.AES.decrypt(req.body.logs,secretKey).toString(crypto.enc.Utf8)
  },function(err, results){


        if(err || !results){
            res.json(err);
        }
        else{
  res.json(crypto.AES.encrypt(results.Firstname,secretKey).toString() );

}
});
  });



  router.post('/serv',(req,res,next)=>{
 
    UserService.findOne({merchantId:crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8),
     // merchantId:crypto.AES.decrypt(req.body.logs,secretKey).toString(crypto.enc.Utf8)
    } ,function(err, results){
  

          if(err || !results){
              res.json(err);
          }
          else{

    UserService.find(function(err, result){
              if(err){
                  res.json(err);
              }
              else{
    
                  res.json(crypto.AES.encrypt(JSON.stringify(result),secretKey).toString());
              }
          });
  }
  
      });
    });
  







  router.post('/userserv',(req,res,next)=>{
       
    UserDetails.findOne({merchantId:crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8),
   //   merchantId:crypto.AES.decrypt(req.body.logs,secretKey).toString(crypto.enc.Utf8)
    },function(err, results){
  

          if(err || !results){
              res.json(err);
          }
          else{
    res.json(crypto.AES.encrypt(JSON.stringify(results),secretKey).toString()
  
         
    );
  }
  
      });
    });

    router.post('/userview',(req,res,next)=>{
       
      User.findOne({username:crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8),
     //   merchantId:crypto.AES.decrypt(req.body.logs,secretKey).toString(crypto.enc.Utf8)
      },function(err, results){
    
  
            if(err || !results){
                res.json(err);
            }
            else{
  // console.log(results);
      User.findOne({Name:results.Name},function(err, resultss){
       
        
           if(resultss)
           {
              UserDetails.find(function(err, users){
                if(err){
                    res.json(err);
               }
                else{
                    res.json(crypto.AES.encrypt(JSON.stringify(users),secretKey).toString());
        
                }
            });
      }
     else{

     }
    
    });      
      
    }
    
        });
      });
  
  

      router.post('/userview1',(req,res,next)=>{
       
        User.findOne({username:crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8),
       //   merchantId:crypto.AES.decrypt(req.body.logs,secretKey).toString(crypto.enc.Utf8)
        },function(err, results){
      
    
              if(err || !results){
                  res.json(err);
              }
              else{
       res.json(crypto.AES.encrypt(JSON.stringify(results),secretKey).toString());
      }
     } );
    })
router.post('/userDetails',(req, res, next)=>{
 
       let newUserDetails=new UserDetails({
   _id: new mongoose.Types.ObjectId(),
      Firstname:crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8),
         LastName: crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8),
         CompanyName:crypto.AES.decrypt(req.body.log3,secretKey).toString(crypto.enc.Utf8),
         Department:crypto.AES.decrypt(req.body.log4,secretKey).toString(crypto.enc.Utf8),
         EmailAddress:crypto.AES.decrypt(req.body.log5,secretKey).toString(crypto.enc.Utf8),
         PhoneNumber:crypto.AES.decrypt(req.body.log6,secretKey).toString(crypto.enc.Utf8),
         MobileNumber:crypto.AES.decrypt(req.body.log7,secretKey).toString(crypto.enc.Utf8),
         Language:crypto.AES.decrypt(req.body.log8,secretKey).toString(crypto.enc.Utf8),
         TimeZone:crypto.AES.decrypt(req.body.log9,secretKey).toString(crypto.enc.Utf8),
         Addressline1:crypto.AES.decrypt(req.body.log10,secretKey).toString(crypto.enc.Utf8),
         Addressline2:crypto.AES.decrypt(req.body.log11,secretKey).toString(crypto.enc.Utf8),
         City:crypto.AES.decrypt(req.body.log12,secretKey).toString(crypto.enc.Utf8),
         State:crypto.AES.decrypt(req.body.log13,secretKey).toString(crypto.enc.Utf8),
         Country:crypto.AES.decrypt(req.body.log14,secretKey).toString(crypto.enc.Utf8),
      //   user:crypto.AES.decrypt(req.body.log15,secretKey).toString(crypto.enc.Utf8),
         merchantId:crypto.AES.decrypt(req.body.log16,secretKey).toString(crypto.enc.Utf8),
          
       });
       newUserDetails.save((err, userDetails)=>{
   
           if(err){
               res.json(err);
           }
           else{
               res.json(true);
           }
           
       });
  });
  router.post('/userService',(req, res, next)=>{
       
         let newUserDetails=new UserService({
      _id: new mongoose.Types.ObjectId(),
   // user:crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8),  
    merchantId:crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8),     
    ServiceName: crypto.AES.decrypt(req.body.log3,secretKey).toString(crypto.enc.Utf8), 
    ServiceDesc:crypto.AES.decrypt( req.body.log4,secretKey).toString(crypto.enc.Utf8), 
    ServiceType:crypto.AES.decrypt( req.body.log5,secretKey).toString(crypto.enc.Utf8), 
    Country:crypto.AES.decrypt(req.body.log6,secretKey).toString(crypto.enc.Utf8), 
    txtAccessperiod:crypto.AES.decrypt(req.body.log7,secretKey).toString(crypto.enc.Utf8), 
    ddlAccessperiod:crypto.AES.decrypt(req.body.log8,secretKey).toString(crypto.enc.Utf8), 

    ddlFallbackpr1:crypto.AES.decrypt(req.body.log9,secretKey).toString(crypto.enc.Utf8), 
    txtFallbackperiod1:crypto.AES.decrypt(req.body.log10,secretKey).toString(crypto.enc.Utf8), 
    ddlFallbackperiod1:crypto.AES.decrypt(req.body.log12,secretKey).toString(crypto.enc.Utf8), 
   
    ddlFallbackpr2:crypto.AES.decrypt(req.body.log13,secretKey).toString(crypto.enc.Utf8), 
    txtFallbackperiod2:crypto.AES.decrypt(req.body.log14,secretKey).toString(crypto.enc.Utf8), 
    ddlFallbackperiod2:crypto.AES.decrypt(req.body.log15,secretKey).toString(crypto.enc.Utf8), 


    txtfreetrail:crypto.AES.decrypt(req.body.log16,secretKey).toString(crypto.enc.Utf8), 
    ddlfreetrailperiod:crypto.AES.decrypt(req.body.log17,secretKey).toString(crypto.enc.Utf8), 

    ddlTps:crypto.AES.decrypt(req.body.log18,secretKey).toString(crypto.enc.Utf8), 

    ServiceimgUrl:crypto.AES.decrypt(req.body.log19,secretKey).toString(crypto.enc.Utf8), 
    RedirectionUrl:crypto.AES.decrypt(req.body.log20,secretKey).toString(crypto.enc.Utf8), 
    CallbackUrl:crypto.AES.decrypt(req.body.log21,secretKey).toString(crypto.enc.Utf8), 
    SerValidationUrl:crypto.AES.decrypt( req.body.log22,secretKey).toString(crypto.enc.Utf8), 
    SerUnSubSCode:crypto.AES.decrypt(req.body.log23,secretKey).toString(crypto.enc.Utf8), 
    SerUnsubId:crypto.AES.decrypt(req.body.log24,secretKey).toString(crypto.enc.Utf8), 
    MHelplineno:crypto.AES.decrypt(req.body.log25,secretKey).toString(crypto.enc.Utf8), 
    MSupEmailid:crypto.AES.decrypt(req.body.log26,secretKey).toString(crypto.enc.Utf8), 
    ReceiptMessage:crypto.AES.decrypt(req.body.log27,secretKey).toString(crypto.enc.Utf8), 
    WelcomeMessage:crypto.AES.decrypt(req.body.log28,secretKey).toString(crypto.enc.Utf8), 
    NotificationMessage:crypto.AES.decrypt(req.body.log29,secretKey).toString(crypto.enc.Utf8), 
    UnSubMessage:crypto.AES.decrypt(req.body.log30,secretKey).toString(crypto.enc.Utf8), 
    ServiceRoutingSettings:crypto.AES.decrypt(req.body.log31,secretKey).toString(crypto.enc.Utf8), 
   
       consumerkey:crypto.AES.decrypt(req.body.log32,secretKey).toString(crypto.enc.Utf8),
  consumerkey1:crypto.AES.decrypt(req.body.log33,secretKey).toString(crypto.enc.Utf8),
  merchantName:crypto.AES.decrypt(req.body.log34,secretKey).toString(crypto.enc.Utf8),     
         });
         newUserDetails.save((err, userService)=>{
             if(err){
                 res.json(err);
             }
             else{
                 res.json(true);
             }
             
         });
    });




    router.put('/updatee/:id',(req, res, next)=>{
      newid=crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8);
          User.findOneAndUpdate({_id:newid},{
      $set:{
             
            //   username:req.body. username,
              // password:req.body.password,
              // Name:req.body.Name,
              // EmailAddress:req.body.EmailAddress,
             //  PhoneNumber:req.body.PhoneNumber

              last_login:crypto.AES.decrypt(req.body.log3,secretKey).toString(crypto.enc.Utf8),
          
      }
          },
          function(err,result){
              if(err){
                  res.json(err);
              }
              else{
                  res.json();
              }
             })
      });


      router.put('/updatemycontents/:id',(req, res, next)=>{
       newString =crypto.AES.decrypt(req.body.log17,secretKey).toString(crypto.enc.Utf8);
      // console.log(req.params.log17);
      
            UserDetails.findOneAndUpdate({_id:local23},{
          $set:{
          Firstname:crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8),
                 LastName:crypto.AES.decrypt(req.body.log2,secretKey).toString(crypto.enc.Utf8),
               // CompanyName:req.body.CompanyName,
                 Department:crypto.AES.decrypt(req.body.log4,secretKey).toString(crypto.enc.Utf8),
                // EmailAddress:req.body.EmailAddress,
                 PhoneNumber:crypto.AES.decrypt(req.body.log6,secretKey).toString(crypto.enc.Utf8),
                 MobileNumber:crypto.AES.decrypt(req.body.log7,secretKey).toString(crypto.enc.Utf8),
               //  Language:req.body.Language,
                // TimeZone:req.body.TimeZone,
                // Addressline1:req.body. Addressline1,
                // Addressline2:req.body.Addressline2,
               //  City:req.body.City,
               //  State:req.body.State,
               //  Country:req.body.Country,
               //  user:req.body.user,
               //  merchantId:req.body.merchantId,
     
              
                }
          },
                function(err,result){
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(true);
                    }
                   })
            });
  
    

router.put('/updateeverything/:id',(req, res, next)=>{
local23=crypto.AES.decrypt(req.body.log1,secretKey).toString(crypto.enc.Utf8);


 UserService.findOneAndUpdate({_id:local23},{
  $set:{
  

  
 // merchantId:req.body.log2,
   // ServiceName:req.body.log3,
 //  ServiceDesc:req.body.log4,
 //  ServiceType:req.body.log5,
    Country:crypto.AES.decrypt(req.body.log6,secretKey).toString(crypto.enc.Utf8),
   txtAccessperiod:crypto.AES.decrypt(req.body.log7,secretKey).toString(crypto.enc.Utf8),
    ddlAccessperiod:crypto.AES.decrypt(req.body.log8,secretKey).toString(crypto.enc.Utf8),

   ddlFallbackpr1:crypto.AES.decrypt(req.body.log9,secretKey).toString(crypto.enc.Utf8),
 txtFallbackperiod1:crypto.AES.decrypt(req.body.log10,secretKey).toString(crypto.enc.Utf8),
   ddlFallbackperiod1:crypto.AES.decrypt(req.body.log12,secretKey).toString(crypto.enc.Utf8),
   
    ddlFallbackpr2:crypto.AES.decrypt(req.body.log13,secretKey).toString(crypto.enc.Utf8),
txtFallbackperiod2:crypto.AES.decrypt(req.body.log14,secretKey).toString(crypto.enc.Utf8),
    ddlFallbackperiod2:crypto.AES.decrypt(req.body.log15,secretKey).toString(crypto.enc.Utf8),


 txtfreetrail:crypto.AES.decrypt(req.body.log16,secretKey).toString(crypto.enc.Utf8),
    ddlfreetrailperiod:crypto.AES.decrypt(req.body.log17,secretKey).toString(crypto.enc.Utf8),

  ddlTps:crypto.AES.decrypt(req.body.log18,secretKey).toString(crypto.enc.Utf8),

   ServiceimgUrl:crypto.AES.decrypt(req.body.log19,secretKey).toString(crypto.enc.Utf8),
   RedirectionUrl:crypto.AES.decrypt(req.body.log20,secretKey).toString(crypto.enc.Utf8),
    CallbackUrl:crypto.AES.decrypt(req.body.log21,secretKey).toString(crypto.enc.Utf8),
    SerValidationUrl:crypto.AES.decrypt(req.body.log22,secretKey).toString(crypto.enc.Utf8),
  //  SerUnSubSCode:req.body.log23,
   // SerUnsubId:req.body.log24,
   MHelplineno:crypto.AES.decrypt(req.body.log25,secretKey).toString(crypto.enc.Utf8),
   MSupEmailid:crypto.AES.decrypt(req.body.log26,secretKey).toString(crypto.enc.Utf8),
  ReceiptMessage:crypto.AES.decrypt(req.body.log27,secretKey).toString(crypto.enc.Utf8),
  WelcomeMessage:crypto.AES.decrypt(req.body.log28,secretKey).toString(crypto.enc.Utf8),
   NotificationMessage:crypto.AES.decrypt(req.body.log29,secretKey).toString(crypto.enc.Utf8),
  UnSubMessage:crypto.AES.decrypt(req.body.log30,secretKey).toString(crypto.enc.Utf8),
  //ServiceRoutingSettings:req.body.log31,

   //consumerkey:req.body.log32,
 // consumerkey1:req.body.log33,
 //  merchantName:req.body.log34,

      }
  
    },

      function(err,result){
    
          if(err){
              res.json(err);
          }
          else{
  
              res.json(true);
          }
         })
  });



router.delete('/removers/:id',(req, res, next)=>{
   User.remove({_id: req.params.id},
       function(err,result){
           if(err){
               res.json(err);
           }
           else{
               res.json(result);
           }
       
    })

});
router.delete('/removersof/:id',(req, res, next)=>{
  var showtime=JSON.stringify(req.params.id)
//UserDetails.f({_id: showtime},
     UserDetails.remove({_id: showtime},
        function
  (err,result){
             if(err){
                 res.json(err);
             }
             else{
                 res.json(result);
             }
         
      })
  
  });
  router.delete('/removersofservice/:id',(req, res, next)=>{

       UserService.remove({_id: req.params.id},
           function(err,result){
               if(err){
                   res.json(err);
               }
               else{
                   res.json(result);
               }
           
        })
    
    });

module.exports = router ;
