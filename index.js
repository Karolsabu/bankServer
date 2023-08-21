// //import express(require importn use chyane) exprress vach server create chyanm(*1st step)
// const express=require('express')
// //import env file(*5 step)config-index file ayitte avn
// require('dotenv').config()

// //dotenv ithupole ezhuthanm and config() vach indexil akkum
// //frontend server integreation server ann cors(lib)cros-cross origin resourse sharing
// //front end ayitte request varan ayitte not from thunder
// //front end and serevr integreation
// //import cors
// const cors=require('cors')
// //database and server integretion
// //import db connection(*--11 step--)
// require('./db/dbconnection')
// //import router(--*13 step--)
//  const router=require('./routes/userRouting')
// //create server using express (*2nd step)
// const server=express()
// //connect with frontend(*6 step)
// server.use(cors())
// //path set akkan
// server.use(router)
// //to convert all incomming json data into js (ts to js)(*7 step)
// //front end and back end lang diff same akkan
// server.use(express.json())
// // server.get('/getpath',(req,res)=>{
// //     res.send("get  requset response")
// // })

// // server.get('/getpath/lastuser',(req,res)=>{
// //     res.send("get  requset response2")
// // })
// //port set(*3 step)(server run chyan)(process-dotenv file varuna module)
// const port=3004 || process.env.port
// //running config(*4 step)(port run chyum)(server.listen use chyane for port set)
// server.listen(port,()=>{
//     console.log(`--------server started at port number${port}-------`);
// })
// //nodemon vach run chyta automatic recombiltion (node server)install chyn npm i nodemon in cmdprmpt
// //nodemon run chyn ----npx nodemon index.js---
//importing a package or library
require("dotenv").config();
const express = require("express");

//importing cors for conntecting FE and BE we are using cors
const cors = require("cors");
const router = require("./routes/userRouting");

//importing db connection
require("./db/dbconnection");

//import router
//require("./routes/userRouting");

//import env file
//ee dotenv file install cheyyanam
//npm i dotenv


//server creation using express
const server = express();

//connecting server and fe using cors
server.use(cors());

//to convert all incoming json type data in to js
//egane cheyyumpo serverlott vernna alla requestum javascriptilott convert aakikolum egane cheythal
server.use(express.json());

server.use(router);

//*example how  the rquest are made

// //server verunna request access cheythitt response send cheyyan
// server.get("/getpath", (req, res) => {
//   //sending response
//   res.send("get api response");
// });

// //second request

// server.get("/lastuser", (req, res) => {
//   //sending response
//   res.send("get api from last user");
// });

//*/

//to run the sever we need to set the port
//process akath aaanu nammal env file indavaa
//so nammal port run cheyunna timil env file koode run aavan vendi egane kodukkanam
const port = 3005 || process.env.port;

//running config in this port
//listen() is an inbuild method.

server.listen(port, () => {
  console.log(`---server started at port numbers ${port}---`);
});