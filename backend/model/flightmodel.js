const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    flightname:{
        type:String,
        minlength:3,
        maxlength:10
    },
    flightto:{
        type:String
    },
    flightfrom:{
        type:String
    },
    date:{
        type:String
    }
})

const usermodel =mongoose.model("Flightdetail",userschema)

module.exports = usermodel