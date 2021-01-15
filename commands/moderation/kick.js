module.exports = {
    name: 'kick',
    aliases: ['push', 'blow'],
    run: async (client, message, args) => {
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply('Sorry this cmd does not work! It does not work because I do not have the **KICK** cmd! Please give me it! :smile:');
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Sorry but your are not eligible to do this command.');
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a leaf to kick!("Leaf" means a person in your guild/group)');
        await Member.kick({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} was kicked from the tree!`)
    }
}