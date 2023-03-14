const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        max:50,
        unique:true,
        requried:true,
    },
    likedMovies:Array,

});

module.exports = mongoose.model("users",userSchema);