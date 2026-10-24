import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const login = async (req, res) => {
    //data fetch
    const {email, password} = req.body;
    //validate on email and password
    if(!email || !password){
        return res.status(400).json({
            success : false,
            message : "Please fill all the details carefully!"
        })
    }
    //Check for registered user
    let user = await User.findOne({email});
    //If not a registered User
    if(!user){
        return res.status(401).json({
            success : false,
            message : "User is not registered"
        })
    }
    const payload = {
        email : user.email,
        id : user._id,
        role : user.role
    }
    //Verify Password and Generate a JWT token
    if(await bcrypt.compare(password, user.password)){
        //password match
        const token = jwt.sign(payload,
                            process.env.JWT_SECRET,
                            {
                                expiresIn : "2h"
                            });
        //add token in user object
        // user = user.toObject();
        user.token = token; //It wont work because we dont have token field in user schema
        user.password = undefined //hiding the password
        
        const options = {
            expiresIn : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), //Expires in 3 days
            httpOnly : true
        }
        res.cookie("prachiCookie", token, options).status(200).json({
            success : true,
            data : {user, token},
            // token, 
            // user,
            message : "User logged in successfully!"
        })
    }else{
        //Password does not match
        res.status(403).json({
            success : false,
            message : "Password Incorrect!" 
        })
    }
}

const signUp = async (req, res) => {
    try{
        //get data
        const {name, email, password, role} = req?.body;
        //check if user already exist
        const isExistingUser = await User.findOne({email});
        //If user is already present then throw error and return
        if(isExistingUser){
            return res.status(400).json({
                success : false,
                message : "User already exist!"
            })
        }
        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }catch(err){
            return res.status(500).json({
                success : false,
                message : "Error in hashing password!"
            })
        }

        //save user in database
        // const myUser = new User({name, email, hashedPassword, role});
        // await myUser.save();
        const saveUser = await User.create({name, email, password : hashedPassword, role});
        res.status(200).json({
            success : true,
            data : saveUser,
            message : "User added to database successfully!"
        })
    }
    catch(err) {
        console.log("Error!!", err);
        res.status(500).json({
            success : false,
            data : err.message,
            message : `Server Error!!`
        })
    }
}   

export {login, signUp};