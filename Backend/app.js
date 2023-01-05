require("dotenv").config(); /* How to bring process.env.PORT */
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter")
const dbConnection = require("./config/db")


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dbConnection();
app.use("/", userRouter); 


module.exports = app;

