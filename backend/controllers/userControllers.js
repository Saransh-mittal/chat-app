const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const generateToken = require("../config/generateToken");
const registerUser = asyncHandler(async (req,res) =>{
    const {name, email, password, pic} = req.body;

    if(!name || !email || !password)
    {
        res.status(400);
        throw new Error("Please fill in all the details");
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("Email already exits");
    }

    const user = await User.create({name,email,password,pic});

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error("failed to create new user");
    }

});

const authUser = asyncHandler(async (req,res) =>{
    const {email, password} = req.body;

    if(!email || !password)
    {
        res.status(400);
        throw new Error("Please fill in all the details");
    }

    const user = await User.findOne({email});
    if(!user){
        res.status(400);
        throw new Error("Incorrect Credentials");
    }

    if((await user.matchPassword(password)))
    {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error("Incorrect Credentials");
    }
});

module.exports = {registerUser, authUser};