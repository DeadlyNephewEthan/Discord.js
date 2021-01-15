const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    run: async(client, message, args) => {
        if(!args[0]) {
            message.channel.send("Send Another Text")
            return;
        }
        const e = new MessageEmbed()
        .setTitle(args)

        message.channel.send(e)
    }
}