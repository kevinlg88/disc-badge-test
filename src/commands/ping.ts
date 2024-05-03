import type {
  CommandData,
  SlashCommandProps,
  CommandOptions,
} from "commandkit";

export const data: CommandData = {
  name: "ping",
  description: "Pong!",
};

export function run({ interaction, client, handler }: SlashCommandProps) {
  interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
}

export const options: CommandOptions = {
  //cooldown: "1d",
  //userPermissions: ["Administrator", "AddReactions"],
  //botPermissions: ["Administrator", "AddReactions"],
  //deleted: false,
};
