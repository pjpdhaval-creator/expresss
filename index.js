// create  a express server

//package.json  ==> type = module ==> import
// package.json ==> type = commonjs ==> const, require

const express = require("express");
const path = require("path");

const app = express();

//Middleware ==> Middleware wan run before route, call before function
// Usecase ==> Authorization, Authentication ,Validation, Error.

//user req ----> server
// (Server req) server res ---> user

// with middleware :
//user req --> middleware(server) --> server route

app.use(function (req, res, next) {
  console.log("Middleware is Working 🏃‍♂️🏃‍♂️");
  next();
});
//login req --> Middlexware (check user into database ) -->server route (profile)
//create a route
app.get("/", function (req, res) {
  res.send("welcome to Express.js file ");
});

app.get("/profile", function (req, res) {
  res.send("show profile page");
});

app.get("/login", function (req, res) {
  const dirpath = path.resolve();
  const FilePath = path.join(dirpath, "Page", "Login.html");
  res.sendFile(FilePath);
});

//error handling :
// Last listed route.
// always write after all routes because it will catch all the errors that are not handle by  the privious  routes.
app.use(function (req, res, next) {
    res.status(404).send("page Not Found ❌❌❌")
    res.status(500).send("Somthing Went Wrong    ❌❌❌")
});

//====================================================
app.get("/signup", function (req, res) {
  const dirpath = path.resolve();
  const FilePath = path.join(dirpath, "Page", "SignUp.html");
  res.sendFile(FilePath);
});

app.get("/signup", function (req, res) {
  res.send("welcome to signup page ");
});

app.listen(1818, () => {
  console.log("server is successfuly run....");
});
