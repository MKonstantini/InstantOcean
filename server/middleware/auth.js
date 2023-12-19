// MIDDLEWARE THAT COPIES TOKEN DATA FROM REQ.HEADER(AUTH) TO REQ.PAYLOAD
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        // take token from header
        // const token = req.header("Authorization")
        const token = req.headers.authorization.split(' ')[1]
        if (!token) return res.status(400).send("no valid token")
    
        // turns token to object form
        const payload = jwt.verify(token, process.env.JWTKEY)

        // save token in payload
        req.payload = payload
        
        // finalize
        next()

    } catch (err) {
        res.status(400).send(err)
    }
}
