const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    flightid:{
        type:String
    },
    passengers:{
        type:Number
    },
    date:{
        type:String
    }
})

const usermodel =mongoose.model("Booking",userschema)

module.exports = usermodel