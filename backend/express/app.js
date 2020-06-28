const express = require('express')

const bodyParser = require('body-parser')

const authController = require('../controller/authController')

const getdetailController = require('../controller/getdetailController')

const bookinController = require('../controller/bookingController')

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,DELETE");
    next();
});

app.post("/signup",authController.signup)
app.post("/signin",authController.signin)
app.post("/save",getdetailController.addflight)
app.post("/view",getdetailController.getflight)
app.post("/booking",bookinController.booking)
// app.get("/data" ,getdetailController.getdetails)
module.exports = app