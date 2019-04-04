module.exports = {
async run(bot, message, args) {
bot.on('message', message => {
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
           member.send(message.content.substr(3));
                                                      message.delete();

                                                    });
  
