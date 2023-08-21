//pathinn routes polum kodukkum

//import express
const express=require('express')
const logic=require('../controllers/logic')
const jwtMiddleware = require('../middleware/routermiddleware')


//craete an object for router class in express(--*12 step--)
const router=new express.Router()
//application specific middlefare-mothathil nokkam unless like router-validation
//register request post-clientn data kondukkan (get,post,put)
router.post('/bankuser/userregister',logic.register)
//login
router.post('/bankuser/user-login',logic.login)
//user profile
router.get('/bankuser/user-profile/:acno',jwtMiddleware,logic.getProfile)
//balance enquiry
router.get('/bankuser/user-balance/:acno',jwtMiddleware,logic.getBalance)
//money transfer
router.post('/bankuser/money-transfer',jwtMiddleware,logic.moneyTransfer)
//export router
//ttransaction history
router.get('/bankuser/user-history/:acno',jwtMiddleware,logic.history)
//delete account
router.delete('/bankuser/user-delete/:acno',jwtMiddleware,logic.deleteac)
//ividen export chytide indexil import chyum
module.exports=router