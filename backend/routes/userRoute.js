const express = require('express')
const { registerController, loginController } = require('../controller/userController')

const router = express.Router()

//routes
//register
router.post('/register',registerController)
//loogiin
router.post('/login',loginController)
module.exports = router;