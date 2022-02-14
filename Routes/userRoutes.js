const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.get("/", userController.getUsers)
router.get("/id", userController.getUser)
router.post("/", userController.addUser)

module.exports = router;