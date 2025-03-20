const { userModel } = require("../models/user.models");
const bcrypt = require('bcrypt');

const signUp = async(req, res) => {
    const {userName, email, password} =  req.body;

    try {
        bcrypt.hash(password, 7, async(err, hash) => {
            if (err){

            } else {
                const userData = new userModel({ userName, email, password: hash });
                await userData.save();

                res.status(200).send({ message: "User Register Succesfully", user:userData});    
            }
        });
    }
    catch(err) {
        res.status(400).send({ error: err.message});
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "Invalid email or password" });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.status(500).send({ message: "Error comparing passwords" });
            } else if (result) {
                res.status(200).send({ message: "Login successful", user });
            } else {
                res.status(400).send({ message: "Invalid email or password" });
            }
        });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};



module.exports = {
    signUp, login
}