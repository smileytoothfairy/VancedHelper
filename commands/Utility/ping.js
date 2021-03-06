module.exports = {
    name: 'ping',
    description: 'Returns the client ping/heartbeat',
    extended: '',
    usage: '',
    aliases: ['areyouok', 'areyoustillthere', 'p', 'f', 'youfinebro'],
    guildonly: false,
    developersOnly: false,
    args: false,
    category: 'Utility',
    execute(message) {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Took \`${sent.createdTimestamp - message.createdTimestamp}ms\`.`);
        });
    }
};