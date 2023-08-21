
// //responsente routerilote pokum
// //modelcollentn userne import chyikkum
// //import model
// const clients = require("../models/modelcollection")


// //logic for register
// const register = (req, res) => { // body={acno:123,unmae="anu",psw:"abc123"}
//     //access data from body
//     const acno=req.body?.acno
//     console.log(req)
//     const uname=req.body?.uname
//     const psw=req.body?.psw


//     let newdata = new clients({
//                     acno,
//                     uname,
//                     psw,
//                     balance:0,
//                     transactions: []
//                 })
//                 newdata.save()
//                 res.json(newdata)
//     //res.send("register working")
//     // //check acno is present in users collection
//     // //findone orenm kandupiadikan that is asyn so we use then athil usernte akkath check chyum
//     // users.findOne({uname}).then(user => {
//     //     if (user) {
//     //         res.status(401).send("user already exist")
//     //     }
//     //     else {
//     //         //register user-create a new object for user
//     //         var newUser = new users({
//     //             //acno,
//     //             uname,
//     //             psw,
//     //             balance:0,
//     //             transactions: []
//     //         })
        
//     //         // save the object in collection
//     //         newUser.save()
//     //         //response send //json()-convert js data into json type and send( backendil js frontend il json akkanm)
//     //         res.status(200).json(newUser)
//     //     }
//     // })
//             }
// module.exports = {
//     register
// }
// //onnil koodutghal undel object ayi create chya {} exportn

//here we write the logic of the file
//import jsonwebtoken
const jwt=require('jsonwebtoken')

//import model
const clients = require("../models/modelcollection");

//user indo nokanam
//accno, useram,passwor
//using find one
//object und
//logic for register
const register = (req, res) => {
  //body={acno:123,uname="ashiq",psw:"abc1123"}
  //eee oru formatil aakum namuk data vera FE ninn

  const acno = req.body.acno;
  const uname = req.body.uname;
  const psw = req.body.psw;
  console.log(req)

  //check acno is present in users collection
  //findOne() asynchronous method aayond we are using "promise" method here
  clients.findOne({ acno }).then((client) => {
    //if user undenkilll if block work aaakanm
    if (client) {
      res.status(401).send("user already exist");
    } else {
      //registering the new user-create a new object for the user
      let newUser = new clients({
        acno,
        uname,
        psw,
        balance: 0,
        transaction: [],
      });
      //the kayijttt namukk save cheyyanam ennit venam data send cheyyan
      newUser.save();
      //sending responsse:athin nammuk send method use aaka but send use aakumpo nammale data jsonilott convert aakanm .so athin vendi "json()" paraja mthod use aaka
      //json():convert js data into json type and send the data.ee method use aakiya jsonileott convertum aaakum data send cheyyukayum cheyyum

      res.status(200).json(newUser);
    }
  });
};
//logic for login
const login=(req,res)=>{
  const{acno,psw}=req.body
  clients.findOne({acno,psw}).then(client=>{
    if(client){
      //generate token(create chyan)
      //unique ayitte ullth tokn generate chyn and istam ulla stringand no spcl character
      var token=jwt.sign({acno},"secretkey123")
      //client objeiltele token keyword =token akki
      //client["token"]=token
      res.status(200).json({
        acno:client.acno,
      uname:client.uname,//--error
      token
      })
      
    }
    else{
     res.status(401).json("incorrect password or account number")
    }
  })
}
//logic to get profile data
const getProfile=(req,res)=>{
//access acno params from url req
const{acno}=req.params
clients.findOne({acno}).then(client=>{
if(client){
res.status(200).json({
  acno:client.acno,
  uname:client.uname
})
}
else{
  res.status(401).json("user not exist")

}
})
}
//logic to get balance details
const getBalance=(req,res)=>{
  //access acno params from url req
  const{acno}=req.params
  clients.findOne({acno}).then(client=>{
    if(client){
     res.status(200).json({
      acno:client.acno,
      balance:client.balance,
      uname:client.uname
     })
    }
    else{
      res.status(401).json("user not exist")

    }
  })
}
//logic for money transfer
const moneyTransfer=(req,res)=>{
  //access all data from body
  const{fromAcno,toAcno,psw,amount,date}=req.body
  //convert amount to number
  var amnt=parseInt(amount)
  //check from user in db
  clients.findOne({acno:fromAcno,psw}).then(fromuser=>{
    if (fromuser){
         //check touser
         clients.findOne({acno:toAcno}).then(touser=>{
          if(touser){
            //from balance check
            if(amnt<=fromuser.balance){
              fromuser.balance-=amnt
              fromuser.transactions.push({type:'DEBIT',amount:amnt,date,user:touser.uname})
              fromuser.save()

              touser.balance+=amnt
              touser.transactions.push({type:'CREDIT',amount:amnt,date,user:fromuser.uname})
              touser.save()
              res.status(200).json({message:"Transaction success"})
            }
            else{
              res.status(401).json({message:"Insufficient Balance"})
            }
          }
          else{
            res.status(401).json({message:"Invalid credit credentials"})
          }
         })
    }
    else{
      res.status(401).json({message:"Invalid debit credentials"})
    }
  })
}
//logic to transaction history
const history=(req,res)=>{
  const {acno}=req.params
  clients.findOne({acno}).then(user=>{
    if(user){
     res.status(200).json(user.transactions)
    }
    else{
      res.status(401).json("user not exist")
    }
  })
}
//logic to delete account
const deleteac=(req,res)=>{
  const{acno}=req.params
  clients.deleteOne({acno}).then(user=>{
    if(user){
      res.status(200).json("Account deleted successfully")
    }
    else{
      res.status(401).json("user not exist")
    }
  })
}

module.exports = {
  register,login,getProfile,getBalance,moneyTransfer,history,deleteac
}