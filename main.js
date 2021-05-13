const express = require("express");
const app = express();
const port = 5000;
const users = ["John", "Mark"];
app.use(express.json());
const logUsers = (req, res, next) => {
  console.log(users);
  next();
};
app.use(logUsers);
// app.use((req,res,next)=>{
//     console.log('hello every one');
//     next();
// })

const logMethod =
  ("/users",
  (req, res, next) => {
    console.log(req.method);
    next();
  });
app.use(logMethod);
app.use(express("public"));
/////////////////////////////

app.use((err, req, res, next) => {
  if (users.length === 0) {
    const err = new Error("No user");
    err.status = 500;
    next(err);
  } else {
    next();
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
