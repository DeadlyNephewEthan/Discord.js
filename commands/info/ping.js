const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    aliases : ['p'],
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle('Calculating...')
        .setThumbnail('https://th.bing.com/th/id/OIP.Ame9bEjk9mwbX60Xk_0bhgHaHa?w=207&h=207&c=7&o=5&pid=1.7')

        


        message.channel.send(embed).then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            const embedtwo = new MessageEmbed()
                .setTitle(' New Ping ')
                .addField('🤖Bot Latency🤖', `${ping}`)
                .addField('❤️Api Latency❤️', `${client.ws.ping}`)
                .setColor('RANDOM')
                .setThumbnail('https://th.bing.com/th/id/OIP.F9_23olMy7PC4PsM0SsMewHaEG?w=307&h=180&c=7&o=5&pid=1.7')

            resultMessage.edit(embedtwo)
        })

    }
}
