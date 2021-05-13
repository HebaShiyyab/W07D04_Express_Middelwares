const express=require('express');
const router = express.Router();
const methodType = (req,res,next)=>{
    console.log(req.method);
    next(),
}
router.use((req,res,next)=>{
    console.log('Test ');
    next()
})

router.use("/",(req,res,next)=>{
    console.log("anthe");
})
router.post("/login",methodType,(req,res)=>{
    res.json('Login successful')

})
app.use("/about",router);