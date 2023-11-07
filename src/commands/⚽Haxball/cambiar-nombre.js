const { Client, CommandInteraction, MessageEmbed, TextInputComponent, Modal, MessageActionRow } = require("discord.js");
const statsModel = require('../../Models/stats');

module.exports = {
    name: "cambiar-nombre",
    description: "Cambiar nombre hax.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "nuevo-nombre",
            description: "Nuevo nombre",
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

    const nuevoNombre = interaction.options.getString('nuevo-nombre');

    const checkName = await statsModel.findOne({ name: nuevoNombre });
    if(checkName) return interaction.reply({ content: `El nombre que intentas ponerte ya esta registrado`});
    
    const checkSync = await statsModel.findOne({ discordID: interaction.user.id });
    if(!checkSync) return interaction.reply({ content: `Tu cuenta de discord no esta vinculada en haxball!` });

    await statsModel.findOneAndUpdate({ discordID: interaction.user.id }, { name: nuevoNombre})

    interaction.reply({ embeds: [new MessageEmbed().setColor('GREEN').setDescription(`Tu nick fue cambiado a **${nuevoNombre}** correctamente!`)]})
    },
};