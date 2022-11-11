const express = require("express");

const app = express();

const mongoose= require("mongoose");



app.use(express.json());

 

app.listen(3001, () => {

  console.log("Server is running on port 3001");

});

// mongodb://user:pass@192.168.176.1:27017/dbname



//configure mongoose

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Assignment8",

  {



    useNewUrlParser: true,

    useUnifiedTopology: true,

  },

  (err) => {

    if (err) {

      console.log(err);

    } else {

      console.log("Connected to MongoDB");

    }

  }

);

//middleware



 

module.exports = app;