const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "d";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'hmm') {
        message.react('🤔');
    }
});

client.on('message', message => {
    if (message.content === '-avatar') {
        message.reply(message.author.displayAvatarURL);
    }
});

client.on('message', message => {
    if (message.content === '-ping') {
        message.channel.send({embed:{
            color: 0xd1250e,
            description: "Pong  " + Math.round(client.ping) + "ms " + "🏓"
     }
 
client.login(process.env.BOT_TOKEN);
