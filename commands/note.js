let coins = require("../coins.json");
const fs = require("fs");
let note = require("../note.json");
  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    
    let noty = args.join(" ");
    let uCoins = coins[message.author.id].coins;
    if(message.mentions.users.size >= 1) return message.reply("خطأ بالأمر");
    if(noty.length < 1) return message.reply("الرجاء كتابة كلام مناسب عن نفسك")
    if(noty.length > 30) return message.reply("الرجاء كتابة كلام لا يزيد عن 30 حرف")
    if(uCoins<200) return message.reply("لا يوجد لديك المبلغ اللازم");

    coins[message.author.id] = {
        coins: coins[message.author.id].coins -200 }
    note[message.author.id] = {
        note : noty
    };
        
    fs.writeFile("./note.json", JSON.stringify(note), (err) => {
        if (err) console.log(err)
    });

    return message.reply("تم تغيير المعلومات وخصم 200 ريال من رصيدك").then
}

module.exports.help = {
  name:"نوت"
}
