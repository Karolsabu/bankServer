//serverne database ayitte connect chyunath mongoos
//db server integration(*8 step)--import
const mongoose=require('mongoose')
//connect with mongodb atlas(connect chyan connect)(*9 step)
//net issues avoid chyan parser and topology true akkanm 
//then-asynch(promise)
//reject annel catch
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("-------mongodb Atlas connected----");
}).catch(()=>{
    console.log("------mongodb connection error-----");
})
//connect chyna timeil issues avoid chyan ayitte.