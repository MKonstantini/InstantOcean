const mongoose = require("mongoose")

const cruiseSchema = new mongoose.Schema({
    cruiseNum: {type:Number, unique:true, required: true},
    name: {type: String, required: true},
    duration: {type: Number, required: true},
    departFrom: {type: String, required: true},
    ports: {type: String, required: true},
    img: {type: String, required: true},
    startDate: {type: Date, required: true},
    startPrice: {type: Number, required: true}
})

const Cruise = mongoose.model("cruises", cruiseSchema)
module.exports = Cruise