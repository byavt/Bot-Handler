const { Events } = require("../Validation/eventNames");
const { glob } = require('glob')
const { promisify } = require('util')
const PG = promisify(glob)
const Ascii = require('ascii-table')
/**
 * @param {Client} client
 */
module.exports = async (client) => {
	const Table = new Ascii("Eventos cargados!");

	(await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
		const event = require(file);

		if (!Events.includes(event.name) || !event.name) {
			await Table.addRow(
				`${event.name || "MISSING"}`,
				`🟥 El nombre del evento no es válido o falta: ${event.path}`
			);
			return;
		}

		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args, client));
		} else {
			client.on(event.name, (...args) => event.execute(...args, client));
		}

		await Table.addRow(event.path, "🟩 SUCCESSFUL");
	});

	console.log(Table.toString());
};