import express from "express";
import User from "../models/User.mjs";


import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import auth from "./auth.mjs"

const router = express.Router();




router.get("/signup", (req,res) => {
    res.render("signup", {existingUser: false});
  })
  
router.post("/signup", async(req,res) => {
  
      const { name, email, password } = req.body;
      let existingUser;
      try {
        existingUser = await User.findOne({ email });
      }catch (err) {
        return console.log(err);
      }

      //if user with same email id is already present in db 
      if (existingUser) {
        res.render("signup", {existingUser: true});
      }
      
      const user = new User({
        name,
        email,
        password,
        posts: [],
      });
    
      const token = await user.generateToken();

      //res.cookie() function is used to set the cookie name to value.
      //the value parameter may be a string or object converted to json.
      //syntax: res.cookie(name, value, [options]);

      res.cookie("jwt", token, {
        // expires: new Date(Date.now() + 1000000), (used to add exprire time. e.g, in this line after 1000000 milisec cookie will expire)
        httpOnly: true
      });

      try {
        await user.save();
      } catch (err) {
        console.log("err in user save");
        console.log(err);
      }
      console.log(user);
      console.log("After user save and local storage");
      res.redirect("/user/journal");
  });
  
  
  router.get("/login", (req,res) => {
    res.render("login", {existingUser: true});
  })
  
  router.post("/login", async(req,res) => {
    
    const { email, password } = req.body;
      let existingUser;
      try {
        existingUser = await User.findOne({ email }); 
      } catch (err) {
        return console.log(err);
      }
      if (!existingUser) {
         res.render("login", {existingUser: false});
      }
  
      console.log(existingUser);
  
    
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
      const token = await existingUser.generateToken();
      res.cookie("jwt", token, {
        // expires: new Date(Date.now() + 1000000),
        httpOnly: true
      });

     
      if (!isPasswordCorrect) {
        // return res.status(400).json({ message: "Incorrect Password" });
        console.log("Incorrect Password");
        res.status(400).render("login", {existingUser: "incorrect"});
      }
     
      console.log("Login Successfull");
      
      res.redirect("/user/journal");
  });






  router.get("/journal", auth, async(req,res) => {
    if(res.statusCode == 401){
      console.log("in / route");
      res.redirect("/");
    }
    console.log(`${req.cookies.jwt}`);
    console.log(req.user);
    
    const sort = {
      createdAt: 1
    }
    
    //search variable will have value to be searched entered by user
    const search = req.query.search || "";

    //because we are only searhing by title 
    const match = {title: { $regex: search, $options: "i" }} //regex is a method to apply search, option i is used to remove case sensitivity

    //for sorting filter 
    if(req.query.sortBy){
        const str = req.query.sortBy;
        if(str === 'desc'){
          sort.createdAt = -1
        }
        
    }
    let Posts;
    try {
      //here req.user comes from auth
        await req.user.populate({
            path:'posts',
            match,
            options:{
                sort
            }
        });
        Posts = req.user.posts;
        console.log("................................................");
        console.log(Posts);

    }catch(e) {
        res.status(400).send(e.message)
    }
    
    if(!Posts){
      res.render("journal", {posts: []});
    }
    res.render("journal", {posts: Posts});
  })


  router.get("/logout", auth, async(req,res) => {
    if(res.statusCode == 401){
      console.log("in / route");
      res.redirect("/");
    }
    try{
      
      //removing current cookie token from tokens array of user
      req.user.tokens = req.user.tokens.filter((currentToken)=> {
            return currentToken.token !== req.token
      })
      res.clearCookie("jwt"); //removed cookie from browser
      await req.user.save();
      res.redirect("/");
    }catch(err){
      res.status(500).send(err);
    }
  })

 
  

export default router;



