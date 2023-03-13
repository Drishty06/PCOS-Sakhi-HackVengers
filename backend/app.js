
import { createRequire } from "module";
const require = createRequire(import.meta.url);


const express = require("express");


const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
import mongoose from 'mongoose';
dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static("public"));

import chatRouter from "./routes/chat-routes.js";
import journalRouter from "./routes/journal-routes.js";
import router from "./routes/user-routes.mjs";
app.use("/api/chatBot",chatRouter); 

app.use("/user",router);
app.use("/post",journalRouter);
app.use("/chatbox",chatRouter);
mongoose.connect(process.env.MongoDB_Connection_Link, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to the db");
}).catch((err) => {
    console.log(err + " not connected to db");
});

app.get("/", function(req,res,next){
    res.render('home_page');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`server is running on ${PORT}.......`);
});

