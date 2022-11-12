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
      console.log("Database Connection Successfull!");
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

  const User = mongoose.model("user", userSchema);
  app.get("/", (req, res) => {
    res.send("Welcome to WebDevelopment Assignment");
  });


// Create new User - POST
app.post("/user/create", async (req, res) => {
    try {
  
      let user = await User.findOne({ email: req.body.email });
      let nameBool, passBool, emailBool = false;
  
      if (user) {
        res.status(400).send({ message: "We already have your Email Address with us!" });
      } else {
        if (validateName(req.body.name)) {
          nameBool = true;
        } else {
          nameBool = false;
          res.status(400).send({ message: "Name should start only with alphabet!" })
        }
  
        if (validateEmail(req.body.email)) {
          // console.log("Proper email address");
          emailBool = true;
        } else {
          emailBool = false;
          res.status(400).send({ message: "Please enter a valid Email Address" });
        }
  
        if (checkPassword(req.body.password)
          //   && (req.body.password == req.body.confirm_password)
        ) {
          passBool = true;
          // console.log("Password is correct");
        } else {
          passBool = false;
          res.status(400).send({ message: "Please enter a valid password!" });
        }
  
        if (passBool && emailBool) {
          const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
          const innerResult = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            user_type: req.body.user_type
          });
          res.status(201).send(innerResult);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Unexpected Error occurred!" });
    }
  
  })


  // Update user - PUT
app.put("/user/edit", async (req, res) => {

    const user = await User.findOne({ email: req.body.email });
  
    if (user) {
      const passCompare = await bcrypt.compare(req.body.password, user.password);
      if (passCompare) {
  
        if (req.body.new_email != undefined && req.body.new_password != undefined
          // && req.body.confirm_new_password != undefined
        ) {
          res.status(400).send({ message: "Please provide either new email or new password parameters only!" });
        } else if (req.body.new_email != undefined && req.body.new_password == undefined
          // && req.body.confirm_new_password == undefined
        ) {
          // console.log("Update new email");
          if (validateEmail(req.body.new_email)) {
            // console.log("Seems good");
            User.findByIdAndUpdate(user._id, { email: req.body.new_email }, { useFindAndModify: false })
              .then(data => {
                if (!data) {
                  res.status(404).send({
                    message: `${user._id} is not in the database.Please enter a valid userID!`
                  });
                } else {
                  res.send({ message: "Email Address Update Successful!" })
                };
              })
              .catch(err => {
                res.status(500).send({
                  message: "Cannot Update details of the User ID" + user._id
                });
              });
          } else {
            res.status(400).send({ message: "Please enter a valid new Email Address!" });
          }
        } else if (req.body.new_email == undefined && req.body.new_password != undefined
          // && req.body.confirm_new_password != undefined
        ) {
          // console.log("Update new password");
          if (checkPassword(req.body.new_password)
            //   && req.body.new_password == req.body.confirm_new_password
          ) {
            const newPassword = await bcrypt.hash(req.body.new_password, saltRounds);
            User.findByIdAndUpdate(user._id, { password: newPassword }, { useFindAndModify: false })
              .then(data => {
                if (!data) {
                  res.status(404).send({
                    message: `${user._id} is not in the database.Please enter a valid userID!`
                  });
                } else res.send({ message: "Password Update Successfull!" });
              })
              .catch(err => {
                res.status(500).send({
                  message: "Cannot Update details of the User ID" + user._id
                });
              });
          } else {
            res.status(400).send({ message: "Please enter a valid password!" });
          }
        } else {
          res.status(400).send({ message: "Please provide either the new email or new password!" });
        }
      } else {
        res.status(404).send({
          message: `Incorrect password! Please retry!`
        });
      }
    } else {
      res.status(404).send({
        message: `User was not found! Please check the email address.`
      });
    }
  });

  // Delete user
app.delete("/user/delete", async (req, res) => {

    const user = await User.findOne({ email: req.body.email });
  
    if (user) {
    //   const passCompare = await bcrypt.compare(req.body.password, user.password);
    //   if (passCompare) {
        User.findByIdAndDelete(user._id)
          .then(item => {
            if (!item) {
              res.status(404).send({
                message: `Cannot delete User with email=${user.email}. User not found!`
              });
            } else {
              res.send({
                message: `User with email id ${user.email} was deleted successfully!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete User with email=" + user.email
            });
          });
        }else{
            res.status(404).send({
                message:`Email ID does not exist`
            });
        }
    //   } else {
    //     res.status(404).send({
    //       message: `Password incorrect entered, please retry.`
    //     });
    //   }
    // } else {
    //   res.status(404).send({
    //     message: `User was not found! Please check the email address.`
    //   });
    // }
  });
  
  // Get all users
  app.get("/user/getAll", async (req, res) => {
  
    User.find({}, function (err, users) {
      users.forEach(user => delete user.password);
      const newResult = users.map(item => {
        return {
          id: item._id,
          email: item.email,
          password: item.password
        }
      })
      res.send(newResult);
    });
  
  });

  module.exports = app;