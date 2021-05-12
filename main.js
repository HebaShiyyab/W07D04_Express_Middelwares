const express = require("express");
const app = express();
const port = 5000;
const users =["John","Mark"];
app.use(express.json())
const logUsers = ((req,res,next)=>{
    console.log(users);
    next();
})
app.use(logUsers)
// app.use((req,res,next)=>{
//     console.log('hello every one');
//     next();
// })

const logMethod = ("/users",(req,res,next)=>{
    console.log(req.method);
    next();
})
app.use(logMethod)
app.use(express("public"));
// app.get("/users", (req, res, next) => {
//     res.json(users);
//     next();
// });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
