const { Router } = require('express')
const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.index)
router.get('/show', UserController.show)
router.post('/store', UserController.store)
router.put('/update', UserController.update)
router.delete('/delete', UserController.destroy)

module.exports = router