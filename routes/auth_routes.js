const express = require("express")
const router = express.Router()
const {register, loginUser, logout, activeUserSession} = require("../controllers/auth_controller")
const { userAuthenticated } = require("../utils/common_utilities")
router.post("/user", userAuthenticated)
router.post("/register", register)
router.post("/login", loginUser)
router.get("/logout", logout)
router.get('/user', activeUserSession);





module.exports = router