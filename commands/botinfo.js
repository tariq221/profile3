const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setDescription("~ معلومات عن البوت ~")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("●[إسم البوت]", bot.user.username)
    .addField("●[تم إنشاء البوت في]", bot.user.createdAt)
    .setFooter(`@${message.author.username} :المرسل`, message.author.displayAvatarURL);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"بوت"
}
