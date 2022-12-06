const route = require('express').Router()
const authController = require('../controllers/authControllers')
const tryCatch =require('../middlewares/tryCatch')
const errorHandller =require('../middlewares/errorHandller')

route.post('/register' , tryCatch(authController.register))
route.post('/login' , tryCatch(authController.login))
route.post('/reset-password' , tryCatch(authController.resetPassword))
route.get('/verify-email/:token' , tryCatch(authController.verifyEmail))
route.post('/forget-password' , tryCatch(authController.forgetPassword))
route.get('/veriyfy-forget-password/:token' , tryCatch(authController.veriyfyForgetPassword))
route.post('/forme-forget-password' , tryCatch(authController.formeForgetPassword))
route.get('/logout' , tryCatch(authController.logout))

route.use(errorHandller)

module.exports = route