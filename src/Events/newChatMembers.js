module.exports = {
  name: "newChatMembers",
  run: async (client, msg) => {
    if (msg.new_chat_member.is_bot) return;
    if (msg.chat.id !== "-1001404825324") return;

    setTimeout(async () => {
      if (!msg.new_chat_member.username) {
        await msg.reply
          .text(
            `¡Hola ${msg.new_chat_member.first_name}!\nBienvenido al grupo de Telegram de Raptoreum Español.\nSi necesitas saber más de nuestra comunidad teclea el comando /menu`
          )
          .then(async (message) => {
            setTimeout(async () => {
              await client.deleteMessage(msg.chat.id, message.message_id);
              await client.deleteMessage(msg.chat.id, msg.message_id);
            }, 20000);
          });
      } else {
        await msg.reply
          .text(
            `¡Hola @${msg.new_chat_member.username}!\nBienvenido al grupo de Telegram de Raptoreum Español.\nSi necesitas saber más de nuestra comunidad teclea el comando /menu`
          )
          .then(async (message) => {
            setTimeout(async () => {
              await client.deleteMessage(msg.chat.id, message.message_id);
              await client.deleteMessage(msg.chat.id, msg.message_id);
            }, 20000);
          });
      }
    }, 30000);
  },
};
