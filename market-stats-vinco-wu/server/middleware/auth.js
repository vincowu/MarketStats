
const { ResultWithContext } = require("express-validator/src/chain");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    // const token = req.headers.authorization("token");
    if (!req.headers.authorization) return res.status(401).json({ message: "Auth Error" });
    const authToken = req.headers.authorization.split(" ")[1]
    try {
        jwt.verify(authToken, "randomString", (err, decoded) => {
            if (err) {
                res.json(err.message)
                // return res.status(401).send(err.message)
            }
            req.decoded = decoded;
            next();
        });
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
    }
};