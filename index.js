const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const flash = require('connect-flash')
const session = require("express-session");

const dotenv = require("dotenv");
const exphbs = require("express-handlebars");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
app.engine(
    ".hbs",
    exphbs({
      defaultLayout: "main",
      extname: ".hbs",
    })
  );
 
  app.set("view engine", ".hbs");


// //passport middlware
// app.use(passport.initialize());
// app.use(passport.session());

//static folder
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", require("./routes/index"));

app.use(session({
  secret: 'woot',
  resave: true, 
  saveUninitialized: true}));

//Connect flash
app.use(flash());


//global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(
      `server running  on port ${PORT} `
    );
  });