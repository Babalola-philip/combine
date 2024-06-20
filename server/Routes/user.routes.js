 const express = require("express")

 const router = express.Router()

 const {  register, signin, listOfStudent, dashboard} = require("../Controllers/user.controller")


 router.get("/", listOfStudent)

 router.post("/signup", register)

 router.post("/signin", signin)

 router.get('/dashboard', dashboard)


 module.exports = router