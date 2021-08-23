const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require('../middleware/auth')

const User = require("../db/models/user");

router.post("/signup",
    [
        // check ([field,message]) will validate to see if they match the logic and if not it will return the message. Returns validation chain.
        // https://express-validator.github.io/docs/validation-chain-api.html
        check("username", "Please Enter a Valid Username")
            .not()
            .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    async (req, res) => {
        // validation result, basically if the request above returns true for all then it will continue.
        // https://express-validator.github.io/docs/validation-result-api.html#result
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            username,
            email,
            password
        } = req.body;
        try {
            // user will try and find the User with a specific email and return boolean
            let user = await User.findOne({
                email
            });
            // if user is true, it will return message that user exists
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            // otherwise it will create a new User
            user = new User({
                username,
                email,
                password
            });
            // This is bcrypt syntax. bcrypt.genSalt(rounds,cb) Rounds is the cost of processing, so default is 10 so log 10.
            const salt = await bcrypt.genSalt(10);
            // password is plain and salt is salt rounds.
            // https://www.npmjs.com/package/bcrypt
            user.password = await bcrypt.hash(password, salt);

            // saves user on db
            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };
            // jwt.sign( payload, secretOrPrivateKey, [options,callback]). payload is object literal
            jwt.sign(
                payload,
                "randomString", {
                expiresIn: 10000
            },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

router.post("/login", [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.status(200).json({
                    message: "User Does Not Exist"
                });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(200).json({
                    message: "Incorrect Password!"
                })
            };
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(payload, "randomString", { expiresIn: 3600 }, (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
            );
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            })
        }
    })


router.get("/me", auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
});

module.exports = router;

