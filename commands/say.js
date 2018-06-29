const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(!message.member.roles.find("name", "GarZ")) return message.reply("رووح العب بعيد يا بابا!");
    message.delete()
    const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
    }

module.exports.help = {
  name:"قل"
}
