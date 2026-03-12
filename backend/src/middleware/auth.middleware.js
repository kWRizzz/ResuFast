const jwt= require('jsonwebtoken')
const tokenModel=require('../models/token.model')

const authMiddleWare= async (req,res,next) => {
    try {
        const token = req.cookies.token
        if(!token) return res.status(401).json({
            message:"Token Has Not Been found"
        })

        const isTokenBlackListed= await tokenModel.findOne({token})

        if(isTokenBlackListed) return res.status(401).json({
            message:"Token Invalid"
        })

        const decoded=  jwt.verify(token,process.env.SECRET)
        req.user= decoded


        next()
    } catch (error) {
        console.log(`server error middleware Error`);
        res.status(401).json({
            message:`server middleware error ${error}`
        })
    }
}

module.exports= {
    authMiddleWare
}