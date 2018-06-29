const {Discord, MessageAttachment} = require("discord.js");
let coins = require("../coins.json");
let xp = require("../xp.json");
var Jimp = require("jimp");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {

    let uCoins = coins[message.author.id].coins;
    let curlvl = xp[message.author.id].level;
    let curxp = xp[message.author.id].xp;
    Jimp.read(message.author.displayAvatarURL).then(async function (avatt) {

      //  await  Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(async function (font) {
        //await  Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(async function (fontlow) {
        avatt.resize(122, 122)                                     
        avatt.write("./img/shoppingAvatt.jpg")  
        Jimp.read("./img/shopping.jpg").then (async function(lenna) {

        lenna.quality(100)
        lenna.composite( avatt, 19, 21 );

        lenna.write("./img/shopping2.jpg")
        await     message.channel.send(`${message.author}`);
            })
            .then(function() {
                
               return message.channel.send({files: ["./img/shopping2.jpg"]});
            });
            });

       // });
   // });
        }
module.exports.help = {
  name:"متجر"
}
