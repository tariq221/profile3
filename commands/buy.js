let coins = require("../coins.json");
const fs = require("fs");
let bgrounds = require("../bgrounds.json");
let bg = require("../bg.json");
  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    
    let bgnum = args.join(" ").slice(22);
    let uCoins = coins[message.author.id].coins;
    if(message.mentions.users.size >= 1) return message.reply("خطأ بالأمر");
    if(!args[0]) return message.reply("الرجاء تحديد الخلفيه")
    if(uCoins<100) return message.reply("لا يوجد لديك المبلغ اللازم للشراء");
    if(!isNaN()) return message.reply("الرجاء اختيار رقم خلفية صحيح");
    if(!bg[parseInt(args[0])].bg) return message.reply("الرجاء اختيار رقم خلفية صحيح");
    coins[message.author.id] = {
        coins: coins[message.author.id].coins -100 }
    bgrounds[message.author.id] = {
        bgrounds : parseInt(args[0]) }
        
    fs.writeFile("./bgrounds.json", JSON.stringify(bgrounds), (err) => {
        if (err) console.log(err)
    });

    return message.reply("تم الشراء بنجاح وخصم 100 ريال من رصيك").then(msg => {msg.delete(5000)});
}

module.exports.help = {
  name:"شراء"
}
