const Discord = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");
let bg = require("../bg.json");
let bgrounds = require("../bgrounds.json");
let likes = require("../likes.json");
let wesam = require("../wesam.json");
let prowesam = require("../prowesam.json");
let note = require("../note.json");
var Jimp = require("jimp");
const fs = require('fs');
const text2png = require('text2png');
const talkedRecently = new Set();


module.exports.run = async (bot, message, args) => {

  

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

    let timeoute = new Discord.RichEmbed()
    .setColor("#C2C2C2")
    .setTitle("إنتظر 20 ثانية");
    if (talkedRecently.has(message.author.id)) {
        
        message.channel.send(timeoute);
} else {
  let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!message.mentions.users.size < 1){
    if(!prowesam[puser.id]){
        prowesam[puser.id] = {
            w0 : 1,
            w1 : 0,
            w2 : 0,
            w3 : 0,
            w4 : 0,
            w5 : 0
    
        };
      }
      fs.writeFile("./prowesam.json", JSON.stringify(prowesam), (err) => {
        if(err) console.log(err)
      });
      if(!note[puser.id]){
        note[puser.id] = {
            note : 'لا يوجد'
    
        };
      }
      fs.writeFile("./note.json", JSON.stringify(note), (err) => {
        if(err) console.log(err)
      });
      if(!bgrounds[puser.id]){
        bgrounds[puser.id] = {
            bgrounds : 1
        };
      }
      fs.writeFile("./bgrounds.json", JSON.stringify(bgrounds), (err) => {
        if(err) console.log(err)
      });
      if(!coins[puser.id]){
        coins[puser.id] = {
          coins: 0
        };
      }
      fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if(err) console.log(err)
      });
      if(!xp[puser.id]){
        xp[puser.id] = {
          xp: 0,
          level: 1
        };
      }
      fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
      });
      if(!likes[puser.id]){
        likes[puser.id] = {
          likes: 0
        };
      }        
      
      fs.writeFile("./likes.json", JSON.stringify(likes), (err) => {
        if(err) console.log(err)
      });
      

    
    
    let ubackg = bgrounds[puser.id].bgrounds;
    let uw0 = prowesam[puser.id].w0;
    let uw1 = prowesam[puser.id].w1;
    let uw2 = prowesam[puser.id].w2;
    let uw3 = prowesam[puser.id].w3;
    let uw4 = prowesam[puser.id].w4;
    let uw5 = prowesam[puser.id].w5;
    let uCoins = coins[puser.id].coins;
    let curlvl = xp[puser.id].level;
    let curxp = xp[puser.id].xp;
    let curbg = bg[ubackg].bg;
    let w0 = wesam[uw0].w;
    let w1 = wesam[uw1].w;
    let w2 = wesam[uw2].w;
    let w3 = wesam[uw3].w;
    let w4 = wesam[uw4].w;
    let w5 = wesam[uw5].w;
    let nn = note[puser.id].note;
    let curlikes = likes[puser.id].likes;
    fs.writeFileSync('./img/note.png', text2png(nn, {font: '16px Arial', textColor: 'white'}));
    fs.writeFileSync('./img/name.png', text2png(puser.user.username, {font: '16px Arial', textColor: 'white'}));
    Jimp.read(puser.user.displayAvatarURL).then( function (avatt) {
        Jimp.read(w0).then ( function(w0) {
           w0.write("./img/wesam/w0.png")
           Jimp.read(w1).then ( function(w1) {
            w1.write("./img/wesam/w1.png")  
            Jimp.read(w2).then ( function(w2) {
                w2.write("./img/wesam/w2.png")
                Jimp.read(w3).then ( function(w3) {
                 w3.write("./img/wesam/w3.png") 
                 Jimp.read(w4).then ( function(w4) {
                    w4.write("./img/wesam/w4.png") 
                    Jimp.read(w5).then ( function(w5) {
                        w5.write("./img/wesam/w5.png")
                        Jimp.read('./img/note.png').then ( function(note) {
                            Jimp.read('./img/name.png').then ( function(name) {
       Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then( function (font) {
       Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then( function (fontlow) {
        avatt.resize(95, 95)                                    
        avatt.write("./img/logo.jpg")  
        Jimp.read("./img/profileme1.png").then ( function(lenna) {  
        //lenna.print(font, 195, 139, puser.user.username )
        lenna.composite( name, 195, 143 );
        lenna.print(font, 243, 196, `${uCoins}` )
        lenna.print(font, 243, 222, `${curxp}` )
        lenna.print(fontlow, 60, 240, `${curlvl}` )
        lenna.print(fontlow, 60, 330, `${curlikes}` )
        lenna.composite( avatt, 16, 73 );
        lenna.composite( w0, 178, 314);
        lenna.composite( w1, 220, 314);
        lenna.composite( w2, 261, 314);
        lenna.composite( w3, 302, 314);
        lenna.composite( w4, 343, 314);
        lenna.composite( w5, 178, 355);
        lenna.composite( note, 151, 60);
        lenna.write("./img/prof2.png")
        Jimp.read(curbg).then ( function(bg) {
            bg.resize(400, 400)
        
            bg.composite( lenna, 0, 0 );
            bg.write("./img/"+randname+".jpg")
            })
            .then(function() {
                setTimeout(function(){
                message.channel.send({files: ["./img/"+randname+".jpg"]});
            },1000);
                setTimeout(function(){
                fs.unlink("./img/"+randname+".jpg",(err) => {
                    if (err) throw err;
                    console.log('deleted');
                });
                fs.unlink("./img/note.png",(err) => {
                    if (err) throw err;
                    console.log('deleted note.png');
                });
                fs.unlink("./img/name.png",(err) => {
                    if (err) throw err;
                    console.log('deleted name.png');
                });
            },10000);


            });
        

            });
        });
        });
        
    });
});
});
});
});
});
});
});
});
talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 20000);
    }
else{



    let ubackg = bgrounds[message.author.id].bgrounds;
    let uw0 = prowesam[message.author.id].w0;
    let uw1 = prowesam[message.author.id].w1;
    let uw2 = prowesam[message.author.id].w2;
    let uw3 = prowesam[message.author.id].w3;
    let uw4 = prowesam[message.author.id].w4;
    let uw5 = prowesam[message.author.id].w5;
    let uCoins = coins[message.author.id].coins;
    let curlvl = xp[message.author.id].level;
    let curxp = xp[message.author.id].xp;
    let curbg = bg[ubackg].bg;
    let w0 = wesam[uw0].w;
    let w1 = wesam[uw1].w;
    let w2 = wesam[uw2].w;
    let w3 = wesam[uw3].w;
    let w4 = wesam[uw4].w;
    let w5 = wesam[uw5].w;
    let nn = note[message.author.id].note;
    let curlikes = likes[message.author.id].likes;
    fs.writeFileSync('./img/note.png', text2png(nn, {font: '16px Arial', textColor: 'white'}));
    fs.writeFileSync('./img/name.png', text2png(message.author.username, {font: '16px Arial', textColor: 'white'}));
    Jimp.read(message.author.displayAvatarURL).then( function (avatt) {
        Jimp.read(w0).then ( function(w0) {
           w0.write("./img/wesam/w0.png")
           Jimp.read(w1).then ( function(w1) {
            w1.write("./img/wesam/w1.png")  
            Jimp.read(w2).then ( function(w2) {
                w2.write("./img/wesam/w2.png")
                Jimp.read(w3).then ( function(w3) {
                 w3.write("./img/wesam/w3.png") 
                 Jimp.read(w4).then ( function(w4) {
                    w4.write("./img/wesam/w4.png") 
                    Jimp.read(w5).then ( function(w5) {
                        w5.write("./img/wesam/w5.png") 
                        Jimp.read('./img/note.png').then ( function(note) {
                            Jimp.read('./img/name.png').then ( function(name) {
       Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then( function (font) {
       Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then( function (fontlow) {
        avatt.resize(95, 95)                                    
        avatt.write("./img/logo.jpg")  
        Jimp.read("./img/profileme1.png").then ( function(lenna) {
            
        //lenna.print(font, 195, 139, message.author.username )
        lenna.composite( name, 195, 143 );
        lenna.print(font, 243, 196, `${uCoins}` )
        lenna.print(font, 243, 222, `${curxp}` )
        lenna.print(fontlow, 60, 240, `${curlvl}` )
        lenna.print(fontlow, 60, 330, `${curlikes}` )
        lenna.composite( avatt, 16, 73 );
        lenna.composite( w0, 178, 314);
        lenna.composite( w1, 220, 314);
        lenna.composite( w2, 261, 314);
        lenna.composite( w3, 302, 314);
        lenna.composite( w4, 343, 314);
        lenna.composite( w5, 178, 355);
        lenna.composite( note, 151, 60);
        lenna.write("./img/prof2.png")
        Jimp.read(curbg).then ( function(bg) {
            bg.resize(400, 400)
        
            bg.composite( lenna, 0, 0 );
            bg.write("./img/"+randname+".jpg")
            })
            .then(function() {
                setTimeout(function(){
                message.channel.send({files: ["./img/"+randname+".jpg"]});
            },1000);
                setTimeout(function(){
                fs.unlink("./img/"+randname+".jpg",(err) => {
                    if (err) throw err;
                    console.log('deleted');
                });
                    fs.unlink("./img/note.png",(err) => {
                        if (err) throw err;
                        console.log('deleted note');
                    });
                    fs.unlink("./img/name.png",(err) => {
                        if (err) throw err;
                        console.log('deleted name.png');
                    
                });
            },10000);


            });
        

            });
        });
        });
        
    });
});
});
});
});
});
});
});
});
talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 20000);
    }
    }
    
        }
module.exports.help = {
  name:"بروفايل"
}
