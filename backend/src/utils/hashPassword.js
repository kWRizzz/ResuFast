const bcrypt= require('bcryptjs')


const hashPassword= async (password)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashed= bcrypt.hashSync(password,salt)
        return hashed
    } catch (error) {
        console.log(`Some Error Occured While Hashin the Password`);
        process.exit(1)
    }
}


module.exports=hashPassword