let likes = require("../likes.json");
const fs = require("fs");
  const Discord = require("discord.js");
const likedRecently = new Set();
module.exports.run = async (bot, message, args) => {
      
  if (likedRecently.has(message.author.id)) {
      message.delete();
      let timeoute = new Discord.RichEmbed()
    .setColor("#C2C2C2")
    .setTitle("الإعجاب كل 12 ساعة");
      message.channel.send(timeoute).then(msg => {msg.delete(3000)});
} else {
    message.delete(5000);
    let pUser = message.mentions.users.first();
    let LUser  = likes[pUser.id].likes;
    if(message.mentions.users.size > 1) return message.reply("خطأ بالأمر");

    likes[pUser.id] = {
        likes: LUser + 1}
    fs.writeFile("./likes.json", JSON.stringify(likes), (err) => {
        if (err) console.log(err)

    });

      message.reply("تم الإعجاب").then(msg => {msg.delete(5000)});
}
likedRecently.add(message.author.id);
        setTimeout(() => {
          likedRecently.delete(message.author.id);
        }, 43200000);//43200000 12 h //20000 20 sec
        
    }
module.exports.help = {
  name:"لايك"
}
