import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens:[{
    token: {
      type: String,
      required: true,
    }
  }],
  posts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }
  ],
});


//methods are used when we are working with instance
//gererating jwt (token)
userSchema.methods.generateToken = async function () {
    try{
        const token = await jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    }catch(err){
      console.log(err);
    }
}


//it's a pre method which is called before save method starts it's execution.
userSchema.pre("save", async function (next){
 //this will only when password is modified or created
  if(this.isModified("password")){ 
    //hashing the password using bcryptjs
    const passwordHash = await bcrypt.hash(this.password, 10); 
    this.password = passwordHash;
  }
  
  //next is used to call next method or function after current function is over
  next();
})

export default mongoose.model("User", userSchema);
// users







