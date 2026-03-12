const express= require('express')
const userController= require('../controller/user.controller')
const router= express.Router()
const authMddleware= require('../middleware/auth.middleware')
// @router=POST

// @description=/user/api

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.get('/logout',userController.userLogout)
router.get('/get-user',authMddleware.authMiddleWare,userController.userGet)


module.exports=router