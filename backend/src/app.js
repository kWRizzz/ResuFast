const express= require('express')
const cors= require('cors')
const cookieparser=require('cookie-parser')
const app= express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(cookieparser())

module.exports=app