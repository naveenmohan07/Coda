const flight = require('../model/flightmodel')

exports.addflight=(req , res, next)=>{
    const product = new flight({
        flightname:req.body.fname,
        flightto:req.body.to,
        flightfrom:req.body.from,
        date:req.body.date
    })
    console.log(product)
    product.save();
    res.status('201').json({
        message:'Product Added Successfully',
        product:product
    })
}


exports.getflight=(req,res,next)=>{
    // console.log(req.params.from)
    flight.find({  
        flightto:req.body.to,
        flightfrom:req.body.from,
        date:req.body.date}).then((data)=>{                                    
        res.status('200').json({
            message:'Data Received',
            flights:data
        })
    }).catch((err)=>{
        res.status('401').json({
            message:'Unable to fetch data'
        })
    })
}