import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";
import messageParser from "./textProcessor/messageParser.js";

//const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client();

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Client is ready!");
});

client.on("disconnected", (reason) => {
    console.log(reason);
});

client.on("message_create", async (message) => {
    let user = await message.getContact();
    let chat = await message.getChat();
    if (user.number === "5219991411551") {
        //console.log(chat);
        const response = messageParser(message.body);
        await message.reply(response);
        console.log(response);
    }
});

client.initialize();
