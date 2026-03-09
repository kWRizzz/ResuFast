const express= require('express')
const userController= require('../controller/user.controller')
const router= express.Router()

// @router=POST

// @description=/user/api

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)

module.exports=router