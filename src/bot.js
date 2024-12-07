const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
require("./app.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once('ready', () => {
  console.log(`[BOT] - Bot iniciado como ${client.user.tag}`);
  client.user.setActivity("TeamSombra");
  client.user.setStatus("idle");
});

client.on('guildMemberAdd', (member) => {

  let channelid  = "1314972018453643264";

  const channel = member.guild.channels.cache.get(channelid);
  
  if (!channel) return;
  channel.send(`¡Bienvenido/a al servidor, ${member.user}! 🎉`);

});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
  
    const linkRegex = /https?:\/\/[^\s]+/g;
    if (linkRegex.test(message.content)) {
      message.delete().catch((err) => console.error('No se pudo eliminar el mensaje:', err));
      message.channel.send(`${message.author}, los enlaces no están permitidos en este servidor.`);
    }
  });
  
client.login(process.env.token);