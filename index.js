const {Client, Intents, DiscordAPIError, Message} = require("discord.js");
const dotenv = require("dotenv")

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
)

const prefix = "_";

const Discord = require("discord.js")
const fs = require("fs");
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Loading command ${commandName}`);
  client.commands.set(commandName, command);
}

client.on("ready", ()=>{
    console.log("Status : Bot Online!")

    client.user.setActivity("Hatyaiwittayalai School", {
    type: "WATCHING",
    url: "https://www.hatyaiwit.ac.th/intro"
    });
})

client.on("messageCreate", message => {
if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return
    command.run(client, message, args)
}
})

client.login(process.env.TOKEN)