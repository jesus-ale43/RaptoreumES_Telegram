module.exports = {
    name: "newChatMembers",
    run: async (client, msg) => {
        console.log(`Se ha unido alguien. ${msg.new_chat_members.first_name}`)
    }
}