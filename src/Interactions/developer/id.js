module.exports = {
    name: ["/id"],
    async run(client, msg) {
        if (msg.from.username !== "ashx2_2") {
            return;
        }

        msg.reply.text(`La ID de este chat es: \`${msg.chat.id}\``, { parseMode: 'Markdown' })


    }
}