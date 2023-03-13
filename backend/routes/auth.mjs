import jwt from "jsonwebtoken";
import User from "./../models/User.mjs"

const auth = async(req,res,next) => {
    try{
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyUser);
        //getting user from verifyUser's id
        const user = await User.findOne({_id: verifyUser._id});
        req.token = token;
        req.user = user;
        console.log(`User data from jwt ${user}`);
        next();

    }catch(err){
        res.status(401);
        next(); 
    }
}

export default auth;

















