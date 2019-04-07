const Discord = require("discord.js");


exports.run = async (bot, message, args) => { // Command Handler
    let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply({embed: {
      color: 0xC64540,
      description: "No permission."
    }});
let DMALL = args.join(" ").slice(0);
if (+DMALL) return message.channel.send({embed: {
color: 0xC64540,
}});

message.channel.send({embed: {
color: 0xC64540,
description: "All players in this discord server have got your message."
}});
}
