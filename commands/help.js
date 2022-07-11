const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
	.setColor('#070fed')
	.setTitle('DEK-YORWOR Help!')
	.setDescription("คำสั่งทั้งหมดมี" + " 2 " + "คำสั่ง")
    .addFields(
		{ name: '_ping', value: ': ใช้ดูความล่าช้าของบอท (ms)' },
        { name: '_help', value: ': ใช้ดูคำสั่งทั้งหมดของบอท' }
	)
	.setThumbnail('https://yorwor64slash10.web.app/Img/hatyaiwit_0004.png')
	.setTimestamp()
	.setFooter({ text: 'คำสั่งช่วยเหลือ'});

module.exports.run = (client, message, arge) => {
    message.channel.send({ embeds: [Embed] });
}