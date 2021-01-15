const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ban',
    aliases: ['crush', 'kill'],
    run: async (client, message, args) => {
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('Sorry this cmd does not work! It does not work because I do not have the **BAN** cmd! Please give me it! :smile:');
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Sorry but your are not eligible to do this command.');
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a leaf to ban!("Leaf" means a person in your guild/group)');
        await Member.ban({ reason : args.slice(1).join(" ")})

        const ban = new MessageEmbed()
        .setTitle('New Ban!')
        .addField(`${Member.user.tag}`, `was crushed from the tree.`)
        .setFooter(`Banned by ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(ban)
    }
}