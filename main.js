const express = require("express");
const app = express();
const port = 5000;
const users = ["John", "Mark"];
const products =["keyBoard","mouse"]
const router = express.Router();
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

router.use((req, res, next) => {
  console.log(req.users);
  next();
});
router.post("/users/creat", (req, res, next) => {
    const name = req.body.name;
    products.push(name);
  console.log(products);
  next();
});
const methodType = (req,res,next) => {
    console.log(req.method);
    next();
};
router.use((req,res,next)=>{
    console.log('Test ');
    next()
})

router.use("/",(req,res,next)=>{
    console.log("anther");
})
router.post("/login",methodType,(req,res)=>{
    res.json('Login successful')

})
app.use("/about",router);
// app.use("/products/update")
// app.use("/products", router);
// app.use("/users", router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
