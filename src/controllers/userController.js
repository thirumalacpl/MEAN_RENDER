import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';

const createUser = async(req, res, next) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);
    if(!name || !email || !password){
        res.status(400)
        const err = new Error("please provide name, email and password")
        return next(err)
    }
    if(password.length < 8){
        res.status(400)
        const err = new Error("Password must be atleast 8 characters")
        return next(err)
    }

    // const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    // if(!emailRegex.test(email)){
    //     res.status(400)
    //     const err = new Error("Invalid email address")
    //     return next(err)
    // }
    
    try {
        // const userExists =  await User.findOne({email})
        // if(userExists){
        //     res.status(400)
        //     const err = new Error("email is already registere. please use different");
        //     return next(err);
        // }

        const user = await User.create({
            name,
            email,
            password
        });

        if(user){
            generateToken(res, user._id)
            // 201 means some resource created
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        }

    } catch (error) {
        console.log(error)
        if(error.code === 11000){
            res.status(400)
            const err = new Error("email is already registere. please use different");
            return next(err);
        }
        res.status(500).json({error: error.message} || " Internal server error")
    }
};
const login = async() => {};
const logout = async() => {};
const getProfile = async() => {};
const updateProfile = async() => {};

export {createUser, login, logout, getProfile, updateProfile};