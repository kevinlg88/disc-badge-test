import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import { CommandKit } from "commandkit";
import path = require("path");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

new CommandKit({
  client,
  commandsPath: path.join(__dirname, "commands"),
  eventsPath: path.join(__dirname, "events"),
  validationsPath: path.join(__dirname, "validations"),
  bulkRegister: true,
});

client.login(process.env.TOKEN);
