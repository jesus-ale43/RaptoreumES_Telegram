module.exports = {
    name: ["/votar"],
    async run(client, msg) {
        msg.reply.text("Ingresa a estos sitios a dar tu voto 👍 por Raptoreum 🦅 Si eres parte de esta comunidad es tu deber hacerlo todos los días. Planificate y regala solo 1 minuto de tu tiempo.",
            {
                replyMarkup: {
                    inline_keyboard: [
                        [{ text: "Cryptovotelist", url: "https://cryptovotelist.com/coin/raptoreum" }],
                        [{ text: "CoinMarketLeague", url: "https://coinmarketleague.com/coin/raptoreum" }],
                        [{ text: "CoinMarketCap", url: "https://coinmarketcap.com/currencies/raptoreum/" }],
                        [{ text: "Crypto.com", url: "https://crypto.com/price/es/raptoreum" }],
                    ],
                },
            }
        )
    }
}