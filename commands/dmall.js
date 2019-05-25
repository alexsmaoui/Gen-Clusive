module.exports = {
    async run(bot, message, args) {
        if(message.author.id !== "577715569441243136") return;
        message.guild.members.forEach(member => member.send(args.join(" ")));
    },
    aliases: ["dmall", "adv"],
    name: "dm",
    description: "DM Everyone Something."
};
