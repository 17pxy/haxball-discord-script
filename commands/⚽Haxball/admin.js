
const { Client, CommandInteraction, MessageEmbed, TextInputComponent, Modal, MessageActionRow } = require("discord.js");
const Discord = require('discord.js')
const statsDB = require('../../Models/stats');

module.exports = {
    name: "admin",
    description: " admin",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "dar-ofi",
            description: "Añadir admin oficial",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "nombre",
                    description: "nombre",
                    type: "STRING",
                    required: true
                },
            ],
        },
        {
            name: "cambiar-prefix",
            description: "Cambiar prefix",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "nombre",
                    description: "nombre",
                    type: "STRING",
                    required: true
                },
                {
                    name: "prefix",
                    description: "Prefix",
                    type: "STRING",
                    required: true
                }
            ]
        },
        {
            name: "remover-ofi",
            description: "Remover admin oficial",
            type: "SUB_COMMAND",
            options: [
                {
                    name: "nombre",
                    description: "nombre",
                    type: "STRING",
                    required: true
                },
            ],
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        if( interaction.member.id !== "852300860176597002") return;

        const Sub = interaction.options.getSubcommand([ "dar-ofi", "cambiar-prefix", "remover-ofi"]);
        const name = interaction.options.getString("nombre");
        const data = await statsDB.findOne({ name: name });

        if(!data) interaction.reply({ content: 'Este usuario no esta registrado!', ephemeral: true});

        switch(Sub){
            case "dar-ofi":
        
            await statsDB.findOneAndUpdate({ name: name}, { isAdminOFI: true });
            if(data.isAdminOFI) return interaction.reply({ content: `El usuario ${name} ya es administrador oficial!`, ephemeral: true });
            interaction.reply({ content: `El usuario ${name} fue agregado correctamente como admin oficial!`});

            break;
            case "cambiar-nivel":

            const level = interaction.options.getString("prefix");
            if(!data.isAdminOFI) return interaction.reply({ content: `El usuario ${name} no es administrador oficial!`, ephemeral: true });

            await statsDB.findOneAndUpdate({ name: name}, { adminLevel: level});
            interaction.reply({ content: `El nivel de administrador del usuario  **${name}** fue cambiado correctamente a ${level}!`});
            break;
            case "remover-ofi":

            await statsDB.findOneAndUpdate({ name: name}, { isAdminOFI: false});
            if(!data.isAdminOFI) return interaction.reply({ content: `El usuario ${name} no es administrador oficial!`, ephemeral: true });
            interaction.reply({ content: `El usuario ${name} fue removido correctamente como administrador oficial!`});

            break;
        }

        

    },
};