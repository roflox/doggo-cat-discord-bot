require('dotenv').config();
const Discord = require('discord.js');
const {Intents} = require("discord.js");
const bot = new Discord.Client({intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {

    console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "4 our Noxwaifu",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
});

bot.on('message', msg => {
    const msgCont = msg.content.toLowerCase()
    // console.log(msgCont);

    if (msgCont === "meow") {
        msg.channel.send({
            files: [{
                attachment: 'animals/cat.png',
                name: 'cat.png'
            }]
        })
    } else if(msgCont === "doggo"){
        msg.channel.send({
            files: [{
                attachment: 'animals/doggo.png',
                name: 'doggo.png'
            }]
        })
    }
});