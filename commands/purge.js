const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.find("name", "▢")) return message.reply("رووح العب بعيد يا بابا!");
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount +1
  }).then(messages => message.channel.bulkDelete(messages));
}

module.exports.help = {
  name:"امسح"
}
