const book=require('../model/bookingmodel')

exports.booking=(req,res,next)=>{
        const booking = new book({
            flightid:req.body.fid,
            date:req.body.date,
            passengers:req.body.count
        })
        booking.save();
        res.status('201').json({
            message:'Booking Successfull',
        })
    }