const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    accountType: {type: String, required: true},
    favorites: {type: Array}
})

const User = mongoose.model("users", userSchema)
module.exports = User