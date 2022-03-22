const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../Structures/config.json");

module.exports = {
	name: "ready",
	path: "Client/ready.js",
	once: true,
	/**
	 * @param {Client} client
	 */
	execute(client) {

		client.user.setActivity(`${client.user.username} is amazing!`, {
			type: "WATCHING",
		});

		if (!Database) return;
		mongoose
			.connect(Database, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}).then(console.log('Connected to database!'))
	},
};