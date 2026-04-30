const express= require('express')
const cors= require('cors')
const cookieparser=require('cookie-parser')
const userRoutes=require('./routes/user.route')
const invockGemini= require('./services/ai.services')

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(cookieparser())

app.use("/user/api",userRoutes)

module.exports=app