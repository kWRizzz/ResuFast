const userModel= require('../models/user.model');
const comparePassword = require('../utils/comparePassword');
const hashPassword = require('../utils/hashPassword');
const generateToken = require('../utils/token');

const userRegister= async (req,res) => {
    try {
        const {username, useremail , password}= req.body;

        if(!username || !useremail || !password) return res.status(200).json({
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

        const token= generateToken(user._id,user.useremail)

        res.cookie("token",token)

        res.status(200).json({
            message:"User Has Been Registered",
            user:{
                id:user._id,
                name:user.username,
                email:user.useremail,
                password:user.password
            }
        })

    } catch (error) {
        console.log(`Error has Occured ${error}`);
        res.status(200).json({
            message:`Some Error Has Occured ${error}`
        })
    }
}


const userLogin= async (req,res) => {
    const {useremail,password}= req.body

    if(!useremail || !password) return res.status(400).json({
        message:"Enter All The Credentials"
    })

    const user= await userModel.findOne({useremail})

    if (!user) {
        return res.status(400).json({
            message:"User Not Found"
        })
    }

    const isCorrectPassword= comparePassword(password,user.password)

    if(!isCorrectPassword)return res.status(400).json({
        message:"Entered Password Is Wrong"
    })


        const token= generateToken(user._id,user.useremail)

        res.cookie("token",token)

        res.status(200).json({
            message:"User Has Been Registered",
            user:{
                id:user._id,
                name:user.username,
                email:user.useremail,
                password:user.password
            }
        })
}


module.exports={
    userRegister,
    userLogin
}