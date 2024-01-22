// SERVER
const express = require("express")
const app = express()

// CORS
const cors = require("cors")
app.use(cors())

// PORT CONNECTION
require("dotenv").config();
const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`Connected to port: http://localhost:${port}`))

// DB - Mongoose
const mongoose = require("mongoose")
mongoose
.connect(process.env.DB, {useNewUrlParser: true}) 
.then(() => console.log("Connected to MongoDB MK-Cluster - Collection: InstantOcean"))
.catch((err) => console.log(err))

// API
// Middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
// Routes
const r_users = require("./routes/r_users")
app.use("/api/users", r_users)
const r_cruises = require("./routes/r_cruises")
app.use("/api/cruises", r_cruises)
// Misc Endpoints
app.get("/api", (req, res) => res.send("Welcome to Insant Ocean API"))
app.get("*", (req, res) => res.status(404).send("Error 404 - service not found"))