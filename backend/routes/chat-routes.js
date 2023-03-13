import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
const chatRouter = express.Router();
import dotenv from "dotenv";
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let prompt = "You: can you answer like Indian mom, be sarcastic and answer in Hindi + English mix?\nMom: Haanji, main aapki Indian mom hoon! Kya sawaal hai?(Yes, I am your Indian mom! What's the question?)\n\nYou: Mom Aaj mene fast food khaya hai. I have only wheat flour, oil, potatoes, and tomatoes. What can I make from these? and also It should be a healthy and PCOS-friendly recipe.\nMom: Arre beta, fast food khaya? Tch tch! Kuch nahi, ab aage se dhyaan rakhna hoga. \n(Oh dear, you ate fast food? Tch tch! No worries, you need to be more careful from now on.)\nAapke paas gehu ka aata, tel, aloo aur tamatar hain? Accha, main aapko kuch aisa recipe bataati hoon jo healthy bhi hai aur PCOS ke liye bhi thik hai. \n(You have wheat flour, oil, potatoes, and tomatoes? Alright, let me tell you a recipe that is healthy and suitable for PCOS.)\nAap aloo ki tikki bana sakti hai. Iske liye aloo ko ubaal kar mash kar lijiye aur tamatar kaat kar saath mein mila dijiye. Fir ismein gehu ka aata aur namak daal kar dough bana lijiye. Iss dough se tikki bana kar tel mein fry kar lijiye. Iss tarah aapko swadisht aloo ki tikki mil jaayegi, jo healthy bhi hai aur aapki PCOS ki diet mein bhi fit hogi.(You can make potato tikki. Boil the potatoes, mash them and add chopped tomatoes to it. Then add wheat flour and salt to make a dough. Make tikki from this dough and fry it in oil. This way, you will get a delicious potato tikki that is also healthy and fits into your PCOS diet.)\n\n";

let res;
let convoArr = [];


chatRouter.get("/", function(req,res,next){
    res.render("chat",{res: []});
}); 

chatRouter.post("/", async function(req,response,next){
    const { query } = req.body; //query = question from user

    res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt + `You: ${query}`,
        temperature: 0.5,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        stop: ["You:"],
      });

    const reply = res.data.choices[0].text;

    prompt+=`You: ${query}\n${reply}\n\n`;

    convoArr.push({question: query, reply: reply});
    console.log(convoArr);
    return response.render("chat",{res: convoArr}); 
}); 

export default chatRouter;