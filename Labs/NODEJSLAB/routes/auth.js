const express = require('express')
const router = require.Router()

const AuthController = require('../controllers/AuthController')

router.post('/register', AuthController.register)

module.exports = router