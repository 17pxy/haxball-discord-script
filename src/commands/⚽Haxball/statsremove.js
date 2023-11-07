
const { Client, CommandInteraction, MessageEmbed, TextInputComponent, Modal, MessageActionRow } = require("discord.js");
const Discord = require('discord.js')
const statsDB = require('../../Models/stats');

module.exports = {
    name: "statsremove",
    description: "Manejar stats",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "reset-all",
            description: "Resetear todas las stats",
            type: "SUB_COMMAND",
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

        const Sub = interaction.options.getSubcommand([ "reset-all"]);

        switch(Sub){
            case "reset-all":
        
            interaction.reply({ content: 'Removiendo estadisticas...'});
            await statsDB.updateMany({ goles: 0, coins: 0,isVIP: false, warnings: 0, ganados: 0,perdidos: 0,isMuted: false, partidos: 0, asistencias: 0,golesencontra: 0, puntaje: 0, nivel: 1, isAFK: false, isBanned: false, isBlacklisted: false, size: 15, sizeAccess: false,chatColor: null ,chatColorAccess: false });

            setTimeout( () => {
                interaction.editReply({ content: 'Estadisticas removidas!'})
            }, 2000);

            break;
        }

        

    },
};