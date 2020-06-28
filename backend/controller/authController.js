const User = require('../model/Signupmodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mail = require('../mail/signupmail')

exports.signup=(req,res,next)=>{
    bcrypt.hash(req.body.password ,10).then((hashed)=>{
        const user=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashed
        });user.save().then(result=>{
            mail.sendmail(result)
            res.status('200').json({
                message:'New user',
                user:result
            })
        })
    })
}
exports.signin=(req,res,next)=>{
    User.findOne({ email:req.body.email }).then((val)=>{
         bcrypt.compare(req.body.password,val.password).then((result)=>{
            if(!result){
                res.status('500').json({
                    message:'Password missmatch'
                })
            }
            else{
                 const token=jwt.sign({email:req.body.email},"This_is_my_long_secret")
                     res.json({
                         message:'Logged in Successfully',
                         token:token
                     })
             }
         })
    }).catch((error)=>{
        res.status('401').json({
            message:'Unknown Error',
            error:error
        })
    })
 
 }