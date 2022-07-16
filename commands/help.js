const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
	.setColor('#070fed')
	.setTitle('DEK-YORWOR Help!')
	.setDescription("คำสั่งทั้งหมดมี" + " 3 " + "คำสั่ง")
    .addFields(
		{ name: '_ping', value: ': ใช้ดูความล่าช้าของบอท (ms)' },
        { name: '_help', value: ': ใช้ดูคำสั่งทั้งหมดของบอท' },
		{ name: '_hw (Homework)', value: ': ใช้ดูการบ้านในแต่ละวัน!' }
	)
	.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/6/6f/%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3.png')
	.setTimestamp()
	.setFooter({ text: 'คำสั่งช่วยเหลือ'});

module.exports.run = (client, message, arge) => {
    message.channel.send({ embeds: [Embed] });
}