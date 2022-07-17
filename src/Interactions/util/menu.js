module.exports = {
  name: ["/menu", "/start"],
  async run(client, msg) {
    msg.reply.text(
      `
<a href="http://raptoreum.com/">Raptoreum Pagina Oficial</a>
<a href="http://raptoreum.org/">Pagina de la comunidad</a>
        
<b>Utilidad</b>
<a href="raptoreum.io/">Crea Tu Portafolio</a>
<a href="inodez.com/">Nodos Inteligentes Compartidos</a>
<a href="explorer.raptoreum.com/">Explorador General Raptoreum </a> 
<a href="raptoreum.mopsus.com/mining">Explorador de Minería</a>
<a href="raptoreum.mopsus.com/calc">Explorador Nodos Inteligentes</a>
<a href="zelcore.io/">Billetera Android</a>
<a href="https://github.com/Raptor3um/raptoreum/releases">Descargar Billetera</a>
<a href="https://github.com/WyvernTKC/cpuminer-gr-avx2/releases">Descargar Minero</a>
        
        
<b>Capitalización & Mercados</b>
<a href="coinmarketcap.com/currencies/raptoreum/">CoinMarketCap</a>
<a href="www.coingecko.com/es/monedas/raptoreum">CoinGecko</a>
        
<b>Redes Sociales</b>
<a href="discord.gg/52twWprjMV">Discord</a>
<a href="twitter.com/RaptoreumES">Twitter</a>
<a href="https://www.youtube.com/channel/UCwtdhUMU-GmzVdhBBxMXAAg">Youtube</a>
<a href="t.me/raptoreumEs">Telegram</a>
<a href="https://www.instagram.com/raptoreumes/">Instagram</a>
<a href="https://www.facebook.com/Raptoreum-Espa%C3%B1ol-103051778831599/">Facebook</a>
<a href="soundcloud.com/search?q=RAPTOREUM">Soundcloud</a>
<a href="www.reddit.com/r/raptoreum/">Reddit</a>
<a href="bitcointalk.org/index.php?topic=5065848.0">BitcoinTalk</a>
<a href="github.com/Raptor3um/raptoreum">Github</a>
        
<b>Exchangers</b>
<a href="tradeogre.com/exchange/BTC-RTM">Trade Ogre</a>
<a href="main.southxchange.com/Market/Book/RTM/BTC">Southxchange</a>
<a href="qtrade.io/market/RTM_BTC">Qtrade</a>
<a href="wallet.autradex.systems/">Autradex</a>
Quieres ver otros exchangers?
<a href="http://raptoreum.org/">Visita la Pagina Web</a>
        
<b>Pools de Mineria</b>
<a href="miningpoolstats.stream/raptoreum">Lista</a>`,
      {
        parseMode: "HTML",
      }
    );
  },
};
