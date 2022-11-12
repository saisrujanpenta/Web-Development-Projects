const { validateName, validateEmail, checkPassword } = require("./validations/validations");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
  bcrypt = require("bcrypt"),
  bodyParser = require("body-parser");
const PORT = process.env.PORT || 3005;

const saltRounds = 10;

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running");
});

//configure mongoose
mongoose.connect('mongodb://127.0.0.1:27017/testdb',{useNewUrlParser: true,useUnifiedTopology: true},
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database Connection Successfull");
    }
  }
);

//schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    joined: { type: Date, default: Date.now },
  });