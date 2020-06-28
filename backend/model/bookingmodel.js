const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    flightid:{
        type:String
    },
    flightname:{
        type:String,
        minlength:3,
        maxlength:10
    },
    userid:{
        type:String
    },
    passengers:{
        type:Number
    },
    status:{
        type:String
    }
})

const usermodel =mongoose.model("Booking",userschema)

module.exports = usermodel