import express from "express";
import mongoose from "mongoose";
import Post from "./../models/Post.mjs";
import auth from "./auth.mjs";
<<<<<<< Updated upstream
import sentimental_analysis from "./sentimental_analysis-routes.js";
=======
import { sentimental_analysis } from "./sentiment-analysis.js";
>>>>>>> Stashed changes

const router = express.Router();



router.get("/compose", auth, function(req, res){
    res.render("compose");
});
router.post("/compose", auth, async(req, res) => {
  
  if(res.statusCode == 401){  // if user is not logedin redirect to login route (401 status code is send by auth if user is not verified).
    res.redirect("/user/login");
  }
    const { title, content, image } = req.body;
<<<<<<< Updated upstream
    sentimental_analysis(content)
=======
    sentimental_analysis(content);
>>>>>>> Stashed changes
    let existingUser;
    try {
      existingUser  = req.user;
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "Unable TO FInd User By This ID" });
    }
    const post = new Post({
      title: title,
      content: content,
      image: image,
      user: existingUser._id,
    });
  
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await post.save({ session });
      existingUser.posts.push(post);
      await existingUser.save({ session });
      await session.commitTransaction();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err });
    }
  
    res.redirect("/user/journal");
    
  });
  
  router.get("/posts/:postId", auth, async(req, res) => {
    if(res.statusCode == 401){
      res.redirect("/user/login");
    }
  const requestedPostId = req.params.postId;
  let post;
    try{
      post = await Post.findOne({_id: requestedPostId});
    }catch(err){
      return res.json({message: err.message});
    }
  
    res.render("post", {post: post});
  
  });
  
  router.get("/edit/:id", auth, async(req,res) => {
    if(res.statusCode == 401){
      res.redirect("/user/login");
    }
    const postId = req.params.id;
    let post;
    try {
      post = await Post.findById(postId);
    } catch (err) {
      return console.log(err);
    }
    if (!post) {
      return res.status(404).json({ message: "No post Found" });
    }
    res.render("edit",{post: post});
  
  });
  
  router.post("/edit/:id", auth, async(req,res) => {
    if(res.statusCode == 401){
      res.redirect("/user/login");
    }
    console.log("Inside post request");
    const { title, content, image } = req.body;
    const postId = req.params.id;
    let post;
    try {
      post = await Post.findByIdAndUpdate(postId, {
        title,
        image,
        content,
      }, {
        new: true,
      });
      await post.save();
    } catch (err) {
      return console.log(err);
    }
    if (!post) {
      return res.status(500).json({ message: "Unable To Update The Post" });
    }
    console.log("edit");
    res.redirect("/user/journal");
  });
  
  router.post("/delete", auth, async(req,res) => {
    if(res.statusCode == 401){ // if user is not logedin redirect to login route
      res.redirect("/user/login");
    }
    const id = req.body.delete;
  
    let post;
    try {
      post = await Post.findByIdAndRemove(id).populate("user");
      await post.user.posts.pull({_id: id});
      await postUser.save();
    } catch (err) {
      console.log(err);
    }
    if (!post) {
      return res.status(500).json({ message: "Unable To Delete" });
    }
    return res.status(200).redirect("/user/journal");
    
  });


export default router;















