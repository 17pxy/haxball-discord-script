const { Client, CommandInteraction, MessageEmbed, TextInputComponent, Modal, MessageActionRow } = require("discord.js");
const Discord = require('discord.js')
const statsDB = require('../../Models/stats');
const syncDB = require('../../Models/syncModel');

module.exports = {
    name: "stats",
    description: "Ver stats",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "usuario",
            description: "Usuario para ver stats",
            type: "STRING",
            required: false
        },

    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const userStats = interaction.options.getString('usuario');

        const statsUser = userStats ? await statsDB.findOne({ name: userStats }) : await statsDB.findOne({ discordID: interaction.user.id });
        if(!statsUser) return interaction.reply({ content: `${userStats ? `El usuario ${userStats} no esta registrado en el host!` : `No tenes tu cuenta de haxball vinculada con discord, vinculala usando **/synchax**`}`, ephemeral: true});

        const statsEmbed = new MessageEmbed()
        .setColor('AQUA')
        .setTitle(`Estadisticas de ${statsUser.name}`)
        .setDescription(`Aqui estan las estadisticas del jugador ${statsUser.name} con la id (${statsUser.id})`)
        .addFields(
          { name: `General`, value: `💻 • Nombre de la sala: ${client.config.HAXBALL.ROOM_NAME}\n🪁 • Estado: ${statsUser.isLogged ? "🟢 • Jugando" : "🔴 • Desconectado"}\n🪙 • Coins: ${statsUser.coins}`},
          { name: `Partidos`, value: `🎮 • Jugados: ${statsUser.partidos}\n🏆 • Ganados: ${statsUser.ganados}\n📉 • Perdidos: ${statsUser.perdidos}`},
          { name: `Individual`, value: `⚽ • Goles: ${statsUser.goles}\n👟 • Asistencias: ${statsUser.asistencias}\n🤡 • Goles en contra: ${statsUser.golesencontra}\n🥅 • Vallas Invictas: ${statsUser.vallasinvictas}\n🔝 • Puntaje: ${statsUser.puntaje}\n🏹 • Salvadas Epicas: ${statsUser.salvadasepicas}\n🌟 • Nivel: ${statsUser.nivel}`},
        )

        interaction.reply({ embeds: [statsEmbed] });

        

    },
};