const dateFormat = require('dateformat');
const Discord = require("discord.js");
dateFormat('m/d/yy h:MM:ss TT');

module.exports.run = async (bot, msg) => {
    //Makes sure command is sent in a guild
    if (!msg.guild) {
        throw 'This can only be used in a guild!';
    }

    //Makes sure user mentions a user to get info for
    if (msg.mentions.users.size < 1) {
       return msg.channel.send('`!!معلومات @user#1234`');
    }

    let user = msg.mentions.users.first();
    let member = msg.guild.member(user);

    if (!member) {
        throw 'That member could not be found!';
    }

    //How long ago the account was created
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    //How long about the user joined the server
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

    // Slice off the first item (the @everyone)
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None'];

    let embed = new Discord.RichEmbed()
        .setTitle(`${user.username}#${msg.mentions.users.first().discriminator}`)
        .addField('Status',`${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`)
        .addField('Game',`${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`)
        .addField('Created On',`${dateFormat(user.createdAt)}`)
    .addField('Days Since Creation',`${daysCreated.toFixed(0)}`)
    .addField('Joined On',`${dateFormat(member.joinedAt)}`)
    .addField('Days Since Joining',`${daysJoined.toFixed(0)}`)
    .addField('Roles',`${roles.join(', ')}`,)
    .setFooter(`User ID: ${user.id}`)
    .setThumbnail(user.displayAvatarURL)
            msg.channel.send(embed)
        }




module.exports.help = {
    name: 'معلومات',
    usage: 'userinfo <user>',
    description: 'Shows info about a user'
};