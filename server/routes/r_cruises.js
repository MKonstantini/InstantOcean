const express = require("express")
const router = express.Router()

const Cruise = require("../models/Cruise")

// Joi object
const joi = require("joi")
const cruiseJoiSchema = joi.object({
    cruiseNum: joi.number().required(),
    name: joi.string().required(),
    duration: joi.number().required(),
    departFrom: joi.string().required(),
    ports: joi.string().required(),
    img: joi.string().required(),
    startDate: joi.date().required(),
    startPrice: joi.number().required()
})

// GET ALL CRUISES
router.get("/", async(req, res) => {
    try {
        // get all cruises from DB
        const cruises = await Cruise.find()

        // send res
        cruises
        ? res.status(200).send(cruises)
        : res.status(404).send("no cruises found!")

    } catch (err) {
        res.status(400).send(err)        
    }
})

// ADD CRUISE
router.post("/", async (req, res) => {
    try {
        // joi validation
        const {error} = cruiseJoiSchema.validate(req.body)
        if (error) return res.status(400).send(error) 
        
        // create cruise
        let cruise = new Cruise(req.body)

        // save cruise to DB
        await cruise.save()

        // return cruise as res
        res.status(200).send(cruise)
        
    } catch (err) {
        res.status(400).send(err)
    }
})

// DELETE CRUISE
router.delete("/", async(req, res) => {
    try {
        // delete cruise
        const cruise = await Cruise.findOneAndDelete({cruiseNum: req.body.cruiseNum })
        
        // return if no cruise found
        if (!cruise) return res.status(404).send("cruise not found!")

        // return deleted cruise
        res.status(200).send(cruise)
        
    } catch (err) {
        res.status(400).send(err)        
    }
})

// UPDATE CRUISE
router.patch("/", async(req, res) => {
    // req.body should contain the new edited info
    try {
        // joi validation
        const {error} = cruiseJoiSchema.validate(req.body)
        if (error) return res.status(400).send(error) 

        // update cruise
        const cruise = await Cruise.findOneAndUpdate({cruiseNum: req.body.cruiseNum}, req.body, {new: true})

        // return updated cruise
        res.status(201).send(cruise)
    }
    catch (err) {
        res.status(400).send(err)        
    }
})

module.exports = router