const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.find("name", "GarZ")) return message.reply("رووح العب بعيد يا بابا!");
    message.guild.members.forEach( member =>{
    let bcembed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(message.guild.iconURL)
    .addField("●[من سيرفر]", message.guild.name, true)
    .addField("●[إلى]", `${member}` , true)
    .setColor("#525252")
    .addField("●", args.join(" "));

    //message.guild.members.forEach( member =>{  
    member.send(bcembed);
    message.delete();
        });
}
    
    //message.guild.members.forEach( member =>{  
    //member.send( `<@${message.author.id}> ! ` + "**" + message.guild.name + " : ** " + message.content.substr(10) + ` - ${member} ! `);
    //message.delete();
        //});
//}

module.exports.help = {
  name:"bc"
}
