const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot, message, args) => {
    let defchan = args[0];
    console.log(defchan);
    if(!message.member.roles.find("name", "GarZ")) return message.reply("رووح العب بعيد يا بابا!");

    
    botconfig = {
        defchannel : defchan
    }
    message.reply(`تم التغيير إلى ${defchan}`);
    fs.writeFile("../botconfig.json", JSON.stringify(botconfig), (err) => {
        if (err) console.log(err)
      });
}

module.exports.help = {
  name:"شانل"
}
