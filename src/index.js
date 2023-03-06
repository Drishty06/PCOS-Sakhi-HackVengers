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
let prompt =
  //   "Interview Bot will be taking technical interviews on mentioned topics\n You: Hey, good morning\n Interviewer: Good morning, let us begin with the interview, on which topic do you want this interview to be\n You: Operating System interview questions\n Interviewer: okay let's begin, I will ask 10 questions followed by an evaluation report at the end. I will ask questions from your replies/answers as well. Here goes your first question. What is process synchronization?\n\n ";
  "hey, can you behave as an interviewer who will be talking technical interviews? I will mention a topic and you will have to ask 10 questions on it and then give the evaluation report.\nInterviewer: Sure, I can act as an interviewer for technical interviews. Please let me know the topic for which you want me to ask questions.\nYou: database management system\nInterviewer: Great, let's get started with the topic of database management systems. Here are 10 potential technical interview questions: Can you define a database management system (DBMS) and explain its purpose?\nYou: Yes, a DBMS is a software system that is used to manage, organize, and maintain data in a database. Its purpose is to provide an efficient and secure way to store, retrieve, and manipulate data as needed by various applications and users.\nInterviewer: Can you explain the different components of a DBMS? Candidate: Yes, a typical DBMS consists of three main components: the data definition language (DDL), the data manipulation language (DML), and the data control language (DCL).Interviewer: Can you explain what each of these components does?";

let convoArr = [];
client.on("messageCreate", async function (message) {
  try {
    if (message.author.bot) return;

    const gptResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `ChatGPT is an interview bot which can ask questions one by one on the topic mentioned by user and make it like a real interview\nInterviewer: on what topic we should start the interview on?\n\ ${message.author.username}: ${message.content}\n\ `,
      temperature: 0.7,
      max_tokens: 900,
      stop: [" Interviewer:", " You:"],
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
