const express=require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
mongoose.connect("mongodb://localhost:8080/")