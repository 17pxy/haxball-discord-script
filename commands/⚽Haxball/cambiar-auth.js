const { Client, CommandInteraction, MessageEmbed, TextInputComponent, Modal, MessageActionRow } = require("discord.js");
const statsModel = require('../../Models/stats');

module.exports = {
    name: "cambiar-auth",
    description: "SOLO USAR EN CASO DE QUE SEA NECESARIo.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "nuevo-token",
            description: "Token de haxball (Sacado de la web)",
            type: "STRING",
            required: true
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

    const nuevoToken = interaction.options.getString('nuevo-token');

    const checkSync = await statsModel.findOne({ discordID: interaction.user.id });
    if(!checkSync) return interaction.reply({ content: `Tu cuenta de discord no esta vinculada en haxball!` });

    await statsModel.findOneAndUpdate({ discordID: interaction.user.id }, { auth: nuevoToken });

    interaction.reply({ embeds: [new MessageEmbed().setColor('GREEN').setDescription(`Tu token fue cambiado a **${nuevoToken}** correctamente!`)], ephemeral: true})
    },
};