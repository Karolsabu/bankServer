//pathinn routes polum kodukkum

//import express
const express=require('express')
const logic=require('../controllers/logic')
//craete an object for router class in express(--*12 step--)
const router=new express.Router()
//register request post-clientn data kondukkan (get,post,put)
router.post('/bankuser/userregister',logic.register)
//export router
//ividen export chytide indexil import chyum
module.exports=router