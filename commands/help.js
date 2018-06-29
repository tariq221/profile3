const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.guild.member(message.author).hasPermission("MANAGE_MESSAGES") || 
       message.guild.member(message.author).hasPermission("KICK_MEMBERS") ||
       message.guild.member(message.author).hasPermission("BAN_MEMBERS") ||
       message.guild.member(message.author).hasPermission("MUTE_MEMBERS") ||
       message.guild.member(message.author).hasPermission("DEAFEN_MEMBERS") ){
    let helpembed1 = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setDescription("~ أوامر البوت العامة ~")
    .setColor("#15f153")
    
    .addField("#بروفايل", '● [لعرض البروفايل الخاص]')
    .addField("#متجر", '● [لعرض متجر الخلفيات]')
    .addField("#شراء", '● [لشراء خلفية من المتجر 100 ريال]')
    .addField("#نوت", '● [لكتابة كلام في خانة المعلومات 200 ريال]')
    .addField("#لايك", '● [للإعجاب بشخص داخل السيرفر كل 12 ساعة]')
    .addField("^رصيدي", '● [لمعرفة رصيدك الحالي]')
    .setFooter(`@${message.author.username} :المرسل`, message.author.displayAvatarURL);
        
    let helpembed2 = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setDescription("~ أوامر الإدارة ~")
    .setColor("#FF0000")
    .addField("!!bc", "● [لإرسال رسالة جماعية لجميع من في السيرفر]")
    .addField("!!وسام", "● [لإضافة الأوسمه]")
    .addField("!!قل", "● [للتحدث بالبوت]")
    .addField("!!avatar", "● [لتغيير صورة البوت]")
    //.addField(".صورة", "● []")
    .setFooter(`@${message.author.username} :المرسل`, message.author.displayAvatarURL);
    message.channel.send(helpembed1); 
    message.author.send(helpembed2);}
        else{
           let helpembed1 = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setDescription("~ أوامر البوت العامة ~")
    .setColor("#15f153")
    .addField("!!بوت", '● [معلومات عامة عن البوت]')
    .addField("!!بروفايل", '● [لعرض البروفايل الخاص]')
    .addField("!!متجر", '● [لعرض متجر الخلفيات]')
    .addField("!!شراء", '● [لشراء خلفية من المتجر]')
    .addField("!!لايك", '● [للإعجاب بشخص داخل السيرفر]')
    .addField("!!معلومات", '● [منشن اي شخص لمعرفة معلوماته]')
    .addField("!!meme list", '● [اذا ما تعرف وش السالفه لا تستخدم الامر]')
    .setFooter(`@${message.author.username} :المرسل`, message.author.displayAvatarURL);
        message.channel.send(helpembed1);
  }
}
module.exports.help = {
  name:"مساعدة"
}
