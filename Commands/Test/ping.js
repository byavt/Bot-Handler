const { CommandInteraction, MessageEmbed, Client } = require("discord.js");

module.exports = {
	name: "ping",
	path: "Test/ping.js",
	description: "Gives the latency of the bot!",
	/**
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction, client) {

		interaction.reply({ embeds: [new MessageEmbed().setTitle('Thanks for using me!').setDescription(`${client.user.username}'s ${client.ws.ping}ms`).setColor('RANDOM')]})

	},
};
