module.exports = {
    name: ["/redes"],
    async run(client, msg) {
        msg.reply.text("Ingresa a las Redes Sociales de Raptoreum 🦅 y suscríbete, activas las notificaciones y recuerda darle 👍 al Contenido. Si eres parte de esta comunidad es tu deber.",
            {
                replyMarkup: {
                    inline_keyboard: [
                        [{ text: "Twitter", url: "http://twitter.com/RaptoreumES" }],
                        [{ text: "Youtube", url: "https://www.youtube.com/channel/UCwtdhUMU-GmzVdhBBxMXAAg" }],
                        [{ text: "Instagram", url: "https://www.instagram.com/raptoreumes/" }],
                        [{ text: "Facebook", url: "https://www.facebook.com/Raptoreum-Espa%C3%B1ol-103051778831599/" }],
                        [{ text: "Discord (Ingles)", url: "https://discord.com/invite/52twWprjMV" }],
                        [{ text: "Discord (Español)", url: "https://discord.gg/CaStVkuCsz" }],
                    ]
                },
            }
        )
    }
}