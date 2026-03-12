const mongoose= require('mongoose')

const tokenSchema= mongoose.Schema({
    token:{
        type:String,
        required:[true,"Token Not Got"]
    }
},
{
    timestamps:true
}
)

module.exports= mongoose.model("token",tokenSchema)