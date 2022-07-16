const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
	.setColor('#35f505')
	.setTitle('ระบบดูการบ้าน !')
	.setDescription("การบ้านของวันนี้มีทั้งหมด "+"0"+" วิชา")
    .addFields(
		{ name: 'วิชา / การบ้าน / วันกำหนดส่ง', value: '\n----- ไม่มีการบ้านนะ ให้อ่านหนังสือ เตรียมตัวสอบ -----' },
	)
	.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/6/6f/%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3.png')
	.setTimestamp()
	.setFooter({ text: 'การบ้าน ณ วันที่'});

module.exports.run = (client, message, arge) => {
    message.channel.send({ embeds: [Embed] });
}