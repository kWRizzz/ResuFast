const jwt= require('jsonwebtoken')


const generateToken= (userID,email)=>{
    try {
        const token =  jwt.sign({userID,email},process.env.SECRET)
        return token
    } catch (error) {
        console.log(`Some Error Has Occcured While Generating User's Token`);
        process.exit(1)
    }
}

module.exports=generateToken 