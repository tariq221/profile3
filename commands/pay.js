const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345

  if(!coins[message.author.id]){
    return message.reply("ما عندك ولا ريال!")
  }

  let pUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }
  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;
  let amount = args.join(" ").slice(22);
  console.log(pUser.id);

  if(!pUser) return message.reply("لم يتم العثور على المستخدم");
  if(sCoins < args[0]) return message.reply("المبلغ غير متوفر!");
  if(message.mentions.users.size < 1) return message.reply("لم يتم تحديد المستخم!");
  if(!parseInt(args[1])) return message.reply("غلط");

  

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };
  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };
  let payEmb = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setTitle(`✔[حوالة بنكية] [${args[1]} ريال]`)
  .setColor("#C2C2C2")
  .addField("[من المطنوخ]", `${message.author}`, true)
  .addField("[إلى]", `${pUser}`, true)
  message.channel.send(payEmb);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "تحويل"
}
