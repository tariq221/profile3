const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let coins = require("./coins.json");
let xp = require("./xp.json");
var Jimp = require("jimp");
let bgrounds = require("./bgrounds.json");
let prowesam = require("./prowesam.json");
let likes = require("./likes.json");
let note = require("./note.json");
bot.commands = new Discord.Collection();




fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

fs.readdir("./others/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./others/${f}`);
    console.log(`${f} loaded!`);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity('Family-BOT | '+botconfig.prefix+'مساعدة', {type: "PLAYING"});

});

bot.on('guildMemberAdd', member => {
  const millisCreated = new Date().getTime() - member.user.createdAt.getTime();
  const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

  //How long about the user joined the server
  const millisJoined = new Date().getTime() - member.guild.joinedAt.getTime();
  const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
  let bicon = member.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL)

    .setTitle(' تاريخ دخولك للدسكورد منذ '+`${daysCreated.toFixed(0)}`+' يوم ')

  function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}
let randname = randomString(16, 'aA');
console.log(randname);



  Jimp.read(member.user.displayAvatarURL).then(async function (avatt) {
    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(async function (font) {
    avatt.resize(189, 189)                      
    avatt.write("./img/logo.jpg")  
    Jimp.read("./img/wel.png").then (async function(lenna) {
        
    lenna.print(font, 610, 183, member.user.username )
    lenna.composite( avatt, 158, 93 );
       lenna.write("./img/"+randname+".png")
        })
        .then(async function() {
          const channel = member.guild.channels.find('name', botconfig.defchannel);
          // Do nothing if the channel wasn't found on this server
          if (!channel) return;
          setTimeout(async function(){
            channel.send(embed);
            channel.send({files: ["./img/"+randname+".png"]}).then(
            );
          }, 1000);
      setTimeout(async function(){
        channel.send('`Welcome in your FAMILY ☘`..')
      }, 2000);
            setTimeout(function(){
         fs.unlink("./img/"+randname+".png",(err) => {
          if (err) throw err;
          console.log('deleted');
      });
          }, 10000);
        })
        
});

});



});



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  if(!prowesam[message.author.id]){
    prowesam[message.author.id] = {
        w0 : 1,
        w1 : 0,
        w2 : 0,
        w3 : 0,
        w4 : 0,
        w5 : 0

    };
  }

  fs.writeFile("./prowesam.json", JSON.stringify(prowesam), (err) => {
    if (err) console.log(err)

  });
  if(!note[message.author.id]){
    note[message.author.id] = {
        note : 'لا يوجد'

    };
  }

  fs.writeFile("./note.json", JSON.stringify(note), (err) => {
    if (err) console.log(err)

  });


  if(!bgrounds[message.author.id]){
    bgrounds[message.author.id] = {
        bgrounds : 1
    };
  }

  fs.writeFile("./bgrounds.json", JSON.stringify(bgrounds), (err) => {
    if (err) console.log(err)

  });

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 3) + 1;
  let baseAmt = Math.floor(Math.random() * 3) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });

  //message.channel.send(message.author +"` 💸 "+`${coinAmt}`+" ريـال صدقة جارية `").then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1000;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlico = message.author.displayAvatarURL;
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setThumbnail(lvlico)
    .setTitle("Level Up!")
    .setColor("#6E0A51")
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  if(!likes[message.author.id]){
    likes[message.author.id] = {
      likes: 0
    };
  }
  fs.writeFile("./likes.json", JSON.stringify(likes), (err) => {
    if(err) console.log(err)
  });



  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  //if (message.content.toString()== ".") return message.channel.send("y");
  if (!message.content.startsWith(prefix)) return;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args, sql);


});

bot.login(process.env.BOT_TOKEN);
