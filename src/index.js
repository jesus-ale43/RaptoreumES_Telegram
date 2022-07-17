const TeleBot = require('telebot');
const { readdirSync } = require('fs');
const { config } = require('dotenv');
const path = require('path');
config();

const client = new TeleBot({
    token: process.env.TOKEN,
    /*
    polling: {
        interval: 1000,
        timeout: 0,
        limit: 100,
        retryTimeout: 5000
    },
    */
});


const Interactions = readdirSync(path.join(__dirname, 'Interactions'));

for (const folders of Interactions) {
    const folder = readdirSync(path.join(__dirname, 'Interactions', folders))
    for (const file of folder) {
        const interaction = require(path.join(__dirname, 'Interactions', folders, file))
        console.log(`[Interactions]: ${file} has loaded successfully.`)
        client.on(interaction.name, async (...args) => {
            try {
                await interaction.run(client, ...args)
            } catch (error) {
                console.log(error)
            }
        })
    }
}


const Events = readdirSync(path.join(__dirname, 'Events'));

for (const file of Events) {
    const event = require(path.join(__dirname, 'Events', file))
    console.log(`[Events]: ${file} has loaded successfully.`)
    client.on(event.name, async (...args) => {
        try {
            await event.run(client, ...args)
        } catch (error) {
            console.log(error)
        }
    })
}