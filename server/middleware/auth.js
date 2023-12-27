// MIDDLEWARE THAT COPIES TOKEN DATA FROM REQ.HEADER(AUTH) TO REQ.PAYLOAD
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        // take token from header.authorization
        let token = req.headers.authorization.split(' ')[1]

        // check if found
        if (!token) return res.status(400).send("no valid token")
    
        // turns token to object form
        token = jwt.verify(token, process.env.JWTKEY)

        // save token in payload (req.body)
        req.payload = token
        
        // finalize
        next()

    } catch (err) {
        res.status(400).send(err)
    }
}
