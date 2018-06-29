let prowesam = require("../prowesam.json");
const fs = require("fs");

  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    if(!message.member.roles.find("name", "GarZ")) return message.reply("رووح العب بعيد يا بابا!");
    let pUser = message.mentions.users.first();
    prowesam[pUser.id] = {
        w0 : parseInt(args[1]),
        w1 : parseInt(args[2]),
        w2 : parseInt(args[3]),
        w3 : parseInt(args[4]),
        w4 : parseInt(args[5]),
        w5 : parseInt(args[6])
     }
        
    fs.writeFile("./prowesam.json", JSON.stringify(prowesam), (err) => {
        if (err) console.log(err)
    });

    return message.reply("تم الامر بنجاح");
}

module.exports.help = {
  name:"وسام"
}
