import mongoose from "mongoose";

// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const marked = require("marked");
// const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  image:{
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  sanitizedHtml: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

postSchema.pre('validate', function(next) {

  if (this.content) {
    this.sanitizedHtml = dompurify.sanitize(marked.parse(this.content))
  }

  next()
})

export default mongoose.model("Post", postSchema);


