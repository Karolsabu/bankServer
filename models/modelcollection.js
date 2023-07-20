const mangoose=require('mongoose')
//create model for collection(--*10 step--)
//mongoos vacch model create chyan ann use 
//schema fields and values of collections
//users,oru collection ullath kond
//users same name ann collection use chyane
//database command chyane ann monogshesh
//server vach mongodb use chyane commands methods(CRUD)reffer notebook for the method commands
const clients=new mangoose.model("clients",{
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transactions:[]
})
//to export model
module.exports=clients