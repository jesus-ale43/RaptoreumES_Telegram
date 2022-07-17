const axios = require('axios');

module.exports = {
    name: ["/precio"],
    run: async (client, msg) => {
        if (msg.from.username !== "ashx2_2") {
            return msg.reply.text("Este comando ha sido desactivado temporalmente, por favor inténtalo más tarde.");
        }
    }
}