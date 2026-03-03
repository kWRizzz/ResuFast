const jwt= require('jsonwebtoken')


const generateToken=async (email)=>{
    try {
        const token = jwt.sign({email},process.env.SECRET)
        return token
    } catch (error) {
        console.log(`Some Error Has Occcured While Generating User's Token`);
        process.exit(1)
    }
}

module.exports=generateToken