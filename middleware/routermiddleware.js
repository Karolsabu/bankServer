//middleware
const jwt=require('jsonwebtoken')
  const jwtMiddleware=(req,res,next)=>{
  
    //token access chyn pattiyenkil run time error varum-solve chyan ann try catch
    //error varan chance ullath tryil akkath kodukkum (try epplum work chyum)
    //enthan work chyandeth enn catchinte akkath kodukkum(tryil error vannale catch work avvulu)
    try{
          //access token from request header-headers nina edukkane
    const token=req.headers["access_token"]
    //validate token-jwt-verify()--import chynm jwt
    jwt.verify(token,"secretkey123")//--true/false akkum varane
    //if token is verified continue the request
    next()
    }
    catch{
  res.status(404).json("please login")
    }
}
module.exports=jwtMiddleware