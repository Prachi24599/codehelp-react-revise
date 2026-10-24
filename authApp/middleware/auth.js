import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//Adding next as third argument because we are passing it to next middleware
//There are 3 ways from where you can get the token - req.body, header and cookies - depending on weather where you have stored it
const auth = (req, res, next) => {
    try{
        //Extract JWT Token
        //Pending - Other ways to fetch the token
        const token = req.body.token;
        if(!token){
            return res.status(401).json({
                success : false,

            })
        }
        //Verify the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            req.user = payload;
        }catch(err) {
            return res.status(401).json({
                success : false,
                message : "Token is Invalid"
            })
        }
        //go to next middleware
        next();
    }catch(err) {
        console.log("Error!!", err);
        res.status(500).json({
            success : false,
            data : err.message,
            message : `Server Error!!`
        })
    }
}

const isStudent = (req, res, next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success : false,
                message : "This is protected routed for students!"
            })
        }
        next();
    }catch(err){
        console.log("Error!!", err);
        res.status(500).json({
            success : false,
            data : err.message,
            message : `Server Error!!`
        })
    }
}

