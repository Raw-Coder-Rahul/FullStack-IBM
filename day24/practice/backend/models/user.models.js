const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type:String,
        require:true
    }
});

const userModel = mongoose.model("user", userSchema);

module.exports ={
    userModel
}