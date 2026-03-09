const userModel= require('../models/user.model');
const hashPassword = require('../utils/hashPassword');
const generateToken = require('../utils/token');

const userRegister= async (req,res) => {
    try {
        const {username, useremail , password}= req.body;

        if(!username || !useremail || password) return res.status(200).json({
            message:"Enter All Credentials"
        })

        if(password.length<6)return res.status(200).json({
            message:"Password is too Weak"
        })

        const isExist= await userModel.findOne({
            useremail
        })

        if(isExist) return res.status(200).json({
            message:"Email Already regitered"
        })

        const hashedPassword= await hashPassword(password);
        // console.log(hashedPassword)

        const user= await userModel.create({
            username,
            useremail,
            password:hashedPassword
        })

        const token= generateToken(user.useremail)

        res.cookies("token",token)

        res.status(200).json({
            message:"User Has Been Registered"
        })

    } catch (error) {
        console.log(`Error has Occured ${error}`);
        res.status(200).json({
            message:"Some Error Has Occured"
        })
    }
}


module.exports={
    userRegister
}