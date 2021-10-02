require('dotenv').config();
const Discord = require('discord.js');
const fetch = require("node-fetch");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const doggoUrl = 'https://dog.ceo/api/breeds/image/random';
const meowUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true";


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

bot.on('message', async msg => {
    const msgCont = msg.content.toLowerCase()
    // console.log(msgCont);

    if (msgCont === "doggo") {
        let response = await (await fetch(doggoUrl)).json();
        console.log(response.message)
        msg.channel.send({
            files: [response.message]
        });
    } else if (msgCont === "meow") {
        let response = await (await fetch(meowUrl)).json();
        console.log(response)
        msg.channel.send({
            files: [response[0].url]
        });
    }
});