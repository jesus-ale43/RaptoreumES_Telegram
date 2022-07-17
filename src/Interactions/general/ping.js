module.exports = {
    name: ["/ping"],
    run: async (client, msg) => {
        await msg.reply.text("Pong!")
    }
}