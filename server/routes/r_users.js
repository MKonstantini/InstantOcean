const express = require("express")
const router = express.Router()
const _ = require("lodash")

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const auth = require("../middleware/auth")

// Joi object
const joi = require("joi")
const userJoiSchema = joi.object({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    accountType: joi.string().required(),
    favorites: joi.array()
})

// POST NEW USER
router.post("/", async (req, res) => {
    try {
        // joi validation
        const {error} = userJoiSchema.validate(req.body)
        if (error) return res.status(400).send(error) 

        // check if exists - mongoose findOne()
        let user = await User.findOne({email : req.body.email})
        if (user) return res.status(400).send("User already exists!")

        // create user
        user = new User(req.body)
        
        // encrypt password - bcrypt.js
        let salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        
        // post user
        await user.save()

        // return res with token
        const token = jwt.sign({
            firstname: user.firstname,
            lastname: user.lastname,
            // ommit password
            email: user.email,
            accountType: user.accountType,
            favorites: user.favorites
        }, process.env.JWTKEY)
        res.status(201).send(token)
        
    } catch (err) {
        res.status(400).send(err)
    }
})

// USER LOGIN
router.post("/login", async (req, res) => {
    try {        
        // check if user exists - findOne()
        let user = await User.findOne({email: req.body.email})
        if (!user) return res.status(404).send("wrong email or password!")

        // check password with encryption - bcrypt.compare()
        const check = await bcrypt.compare(req.body.password, user.password)
        if (!check) return res.status(404).send("wrong email or pasword!")

        // return res with token
        const token = jwt.sign({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            accountType: user.accountType,
            favorites: user.favorites
        }, process.env.JWTKEY)
        res.status(200).send(token)
        
    } catch (err) {
        res.status(400).send(err)
    }
})

// GET ONE USER'S INFO VIA TOKEN
router.get("/", auth, async(req, res) => {
    try {
        // check token
        if (!req.payload) return res.status(400).send("must include token!")

        // get user via email from token
        const user = await User.findOne({email: req.payload.email})
        if (!user) return res.status(404).send("user not found!")

        // return found user info
        res.status(200).send(_.pick(user, [
            "firstname",
            "lastname",
            "email",
            // omit password
            "accountType",
            "favorites",
        ]))
    }
    catch (err) {
        res.status(400).send(err)
    }
})

// PATCH FAVORITES
router.patch("/", auth, async(req, res) => {
    try {
        // check token
        if (!req.payload) return res.status(400).send("must include token!")

        // patch favorites
        const user = await User.findOneAndUpdate(
            {email: req.payload.email},
            {$set : {favorites: req.body.favorites}},
            {new : true}
        )
        if (!user) return res.status(404).send("user not found!")
            
        // send new favorites as res
        res.status(200).send(user.favorites)
    }
    catch (err) {
        res.status(400).send(err)
    }
})


// DELETE USER
router.delete("/", async(req, res) => {
    try {
        // delete user
        const user = await User.findOneAndDelete({email: req.body.email})
        
        // return if not found
        if (!user) return res.status(404).send("user not found!")

        // return user
        res.status(200).send(user)
        
    } catch (err) {
        res.status(400).send(err)        
    }
})

module.exports = router