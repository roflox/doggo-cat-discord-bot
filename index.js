require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const fetch = require("node-fetch");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const dogApi = 'https://api.thedogapi.com/v1/images/search';
const catApi = "https://api.thecatapi.com/v1/images/search";
const catApiHeaders = {
    'X-API-KEY': process.env.CAT_API_KEY
}
const dogApiHeaders = {
    'X-API-KEY': process.env.DOG_API_KEY
}


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

const sendImageFromApiToMessageChannel = async (msg, url , headers) => {
    let response = (await (await fetch(url, headers)).json())[0];
    console.log()
    msg.channel.send({
        files: [response.url]
    });
}

bot.on('message', async msg => {
    const msgCont = msg.content.toLowerCase()
    // console.log(msgCont);

    if (msgCont === "doggo" || msgCont === "woof") {
        sendImageFromApiToMessageChannel(msg, dogApi, dogApiHeaders);
    } else if (msgCont === "cat" || msgCont === "meow") {
        sendImageFromApiToMessageChannel(msg, catApi, catApiHeaders);
    }
});

