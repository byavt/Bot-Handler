// REQUERING NPM'S //

const { Collection, Client, Discord, Intents, MessageButton, MessageActionRow, MessageEmbed, MessageAttachment } = require('discord.js')


module.exports = class Client extends Client {
    constructor() {

        // EXPORTS OF THE CLIENT //

        super({ intents: 32767, partials: ['MESSAGE', 'USER', 'REACTION', 'GUILD_MEMBER', 'CHANNEL']});
        this.setMaxListeners(100);

        // COLLECTIONS //

        this.commands = new Collection();

        // OTHER THINGS //
        

    }; 
    setup() {

      // SETUPS //
      
        require('./Handlers/events')(this);
        require('./Handlers/commands')(this);

      ////////// 

      // LOGIN INTO CLIENT //

        this.login(this.config.Token);

      ///////////////////////
    }
}