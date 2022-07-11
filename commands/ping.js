const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
	.setColor('#fc0303')
	.setTitle('Pong!')
	.setDescription(`🏓 Latency is `+ "`ERR`" + " ms")
	.setThumbnail('https://www.pngall.com/wp-content/uploads/2016/05/Ping-Pong-Download-PNG.png')
	.setTimestamp()
	.setFooter({ text: 'This is a test command'});

module.exports.run = (client, message, arge) => {
    message.channel.send({ embeds: [Embed] });
}