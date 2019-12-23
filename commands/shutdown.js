const { ownerID } = require('../config.json');
module.exports = {
	name: 'shutdown',
    description: 'Shuts down the bot. Bot Owner only.',
    args: false,
    usage: ' ',
    aliases: ['die', 'kys'],
    guildOnly: false,
	execute(message, args) {
        if (!message.member.roles.some(r => r.name === "Admins")) return

        // Shut down
        message.channel.send('*dies*').then(() => {
        process.exit();
        })
    },
};