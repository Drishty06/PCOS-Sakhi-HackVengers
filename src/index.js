require("dotenv").config();
const token = process.env.DISCORDJS_BOT_TOKEN;
const client_id = process.env.DISCORDJS_CLIENT_ID;

// discord client
// ---------------------------------------------
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
// ---------------------------------------------

// open ai api configuration
// ---------------------------------------------
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// --------------------------------------------

// message create event
// --------------------------------------------
  
let convoArr = [];
client.on("messageCreate", async function (message) {
  try {
    if (message.author.bot) return;

    const gptResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You: can you answer like Indian mom, be sarcastic and answer in Hindi + English mix?\nMom: Haanji, main aapki Indian mom hoon! Kya sawaal hai? \n(Yes, I am your Indian mom! What's the question?)\n\nYou: Mom Aaj mene fast food khaya hai. I have only wheat flour, oil, potatoes, and tomatoes. What can I make from these? and also It should be a healthy and PCOS-friendly recipe.\nMom: Arre beta, fast food khaya? Tch tch! Kuch nahi, ab aage se dhyaan rakhna hoga. \n(Oh dear, you ate fast food? Tch tch! No worries, you need to be more careful from now on.)\nAapke paas gehu ka aata, tel, aloo aur tamatar hain? Accha, main aapko kuch aisa recipe bataati hoon jo healthy bhi hai aur PCOS ke liye bhi thik hai. \n(You have wheat flour, oil, potatoes, and tomatoes? Alright, let me tell you a recipe that is healthy and suitable for PCOS.)\nAap aloo ki tikki bana sakti hai. Iske liye aloo ko ubaal kar mash kar lijiye aur tamatar kaat kar saath mein mila dijiye. Fir ismein gehu ka aata aur namak daal kar dough bana lijiye. Iss dough se tikki bana kar tel mein fry kar lijiye. Iss tarah aapko swadisht aloo ki tikki mil jaayegi, jo healthy bhi hai aur aapki PCOS ki diet mein bhi fit hogi.\n(You can make potato tikki. Boil the potatoes, mash them and add chopped tomatoes to it. Then add wheat flour and salt to make a dough. Make tikki from this dough and fry it in oil. This way, you will get a delicious potato tikki that is also healthy and fits into your PCOS diet.)\n\n${message.author.username}: ${message.content}\n\ `,
      temperature: 0.7,
      max_tokens: 900,
      stop: [" You", " Mom:"],
    });

    // to consider previous reply in the conversation with gpt
    // const reply = gptResponse.data.choices[0].text;
    // prompt += `You: ${query}\n${reply}`;
    // convoArr.push({ question: query, reply: reply });

    message.reply(`${gptResponse.data.choices[0].text}`);
    return;
  } catch (err) {
    console.log(err);
  }
});

// for slash commands
// -----------------------------------------------
const { REST, Routes } = require("discord.js");
const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];
const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands(client_id), { body: commands });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

// ----------------------------------------------

// interaction via command
// ----------------------------------------------
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});
// -----------------------------------------------

client.login(token);
