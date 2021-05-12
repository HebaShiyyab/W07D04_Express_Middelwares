const express = require("express");
const app = express();
const port = 5000;
const users =["John","Mark"];
app.use(express.json())
//Create a middleware function logUsers that logs the users array then invokes the next middleware.
const logUsers = ((req,res,next)=>{
    console.log('hello every one');
    next();
})
app.use(logUsers)
app.use((req,res,next)=>{
    console.log('hello every one');
    next();
})
app.get("/users", (req, res, next) => {
    res.json(users);
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
