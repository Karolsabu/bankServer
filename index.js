//import express(require importn use chyane) exprress vach server create chyanm(*1st step)
const express=require('express')
//import env file(*5 step)config-index file ayitte avn
require('dotenv').config()

//dotenv ithupole ezhuthanm and config() vach indexil akkum
//frontend server integreation server ann cors(lib)cros-cross origin resourse sharing
//front end ayitte request varan ayitte not from thunder
//front end and serevr integreation
//import cors
const cors=require('cors')
//database and server integretion
//import db connection(*--11 step--)
require('./db/dbconnection')
//import router(--*13 step--)
 const router=require('./routes/userRouting')
//create server using express (*2nd step)
const server=express()
//connect with frontend(*6 step)
server.use(cors())
//path set akkan
server.use(router)
//to convert all incomming json data into js (ts to js)(*7 step)
//front end and back end lang diff same akkan
server.use(express.json())
// server.get('/getpath',(req,res)=>{
//     res.send("get  requset response")
// })

// server.get('/getpath/lastuser',(req,res)=>{
//     res.send("get  requset response2")
// })
//port set(*3 step)(server run chyan)(process-dotenv file varuna module)
const port=3004 || process.env.port
//running config(*4 step)(port run chyum)(server.listen use chyane for port set)
server.listen(port,()=>{
    console.log(`--------server started at port number${port}-------`);
})
//nodemon vach run chyta automatic recombiltion (node server)install chyn npm i nodemon in cmdprmpt
//nodemon run chyn ----npx nodemon index.js---