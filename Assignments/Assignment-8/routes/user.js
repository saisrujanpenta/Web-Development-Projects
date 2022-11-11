const { Router } = require('express')
const express = require('express')
const route = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.index)
router.get('/show', UserController.show)
router.get('/store', UserController.store)
router.get('/update', UserController.update)
router.get('/delete', UserController.destroy)

module.exports = router