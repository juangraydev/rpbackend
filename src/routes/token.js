const express = require("express");
const jwt = require('jsonwebtoken')
let router = express.Router();

router
    .route("/login")
    .get((req, res) => {
        const payload = {
            name: "Jhun Wulf Sabala"
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY)

        res.send(token)
    })
    .post((req, res) => {

    })

router
    .route("/register")
    .post((req, res) => {

        console.log(req.body);
        res.send("res")
        
    })

module.exports = router;