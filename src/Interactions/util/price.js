const axios = require('axios');

module.exports = {
    name: ["/precio"],
    run: async (client, msg) => {
        try {
        
            const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/raptoreum');
            
            const { usd, sats, eth } = data.market_data.current_price;
            
            await msg.reply.text(
                `Raptoreum - (RTM) 🦅\n\n\`USD:\`$ ${usd}\n\`BTC:\` ฿ ${sats}\n\`ETH:\` ♢ ${eth}\n\nEn unos segundos verás una captura de la gráfica...`,
                {
                    parseMode: 'Markdown'
                }
            ).then(async (message) => {
            setTimeout( async () => {
                await client.deleteMessage(msg.chat.id, message.message_id)
                await client.deleteMessage(msg.chat.id, msg.message_id)
                }, 300000)
            })
            
            const response = await axios.post(process.env.CHART_API);

            msg.reply.photo(response.data).then(async (message) => {
                setTimeout( async () => {
                    await client.deleteMessage(msg.chat.id, message.message_id)
                    await client.deleteMessage(msg.chat.id, msg.message_id)
                }, 300000)
            })

        } catch (err) {
            console.log(err);
        }
        
    }
}
