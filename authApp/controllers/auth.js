import bcrypt from "bcrypt";
import User from "../models/user.js";

const login = async (req, res) => {

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