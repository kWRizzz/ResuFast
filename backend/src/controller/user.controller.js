const userModel= require('../models/user.model')

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

        


    } catch (error) {
        console.log(`Error has Occured ${error}`);
        res.status(200).json({
            message:"Some Error Has Occured"
        })
    }
}