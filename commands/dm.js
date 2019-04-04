const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '548913423346434060') return;
           message.guild.members.forEach( member => {
               member.send(message.content.substr(3));
message.delete();
           })
        }
        
aliases: ["dmall],
    name: "dm",
description: "dm everyone in the server."

