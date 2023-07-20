
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

module.exports = {
  register,
}