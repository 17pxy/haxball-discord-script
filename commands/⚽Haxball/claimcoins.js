const { Client, CommandInteraction, MessageEmbed, TextInputComponent, Modal, MessageActionRow } = require("discord.js");
const statsModel = require('../../Models/stats');
const coinsModel = require('../../Models/claimCoins');

module.exports = {
    name: "claimcoins",
    description: "Reclamar coins gratis.",
    type: 'CHAT_INPUT',

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

    const stats = await statsModel.findOne({ discordID: interaction.user.id });
    if(!stats) return interaction.reply({ embeds: [new MessageEmbed().setColor('RED').setDescription(`🪙 Vincula tu cuenta de discord con haxball usando '/synchax' para poder reclamar las 200 coins!`)], ephemeral: true});

    if(stats.isVIP || stats.isPremium || stats.isAdminOFI){

    const checkCoins = await coinsModel.findOne({ name: stats.name });
    
    if(!checkCoins){
      if(stats.isAdminOFI){
        giveCoins(interaction, coinsModel, stats, 250, "Admin");

    } else if(stats.isUltimate){
        giveCoins(interaction, coinsModel, stats, 180, "Ultimate");
      
    } else if(stats.isPremium){
        giveCoins(interaction, coinsModel, stats, 100, "VIP");

    } else if(stats.isVIP){
        giveCoins(interaction, coinsModel, stats, 60, "VIP");

    } 
    } else {

      const expirationDate = checkCoins.timestamp;
      const currentDate = new Date();
      const secondsPassed = expirationDate - currentDate;
      const secondsRemaining = Math.floor(secondsPassed / 1000);

      return interaction.reply({ embeds: [new MessageEmbed().setColor('RED').setDescription(`🪙 Ya reclamaste las coins de vip, espera **${secondsRemaining}** segundos para volver a reclamarlas!`)], ephemeral: true});

    }

    } else {

      if(stats.claimedCoins) return interaction.reply({ embeds: [new MessageEmbed().setColor('RED').setDescription(`🪙 Ya reclamaste tus coins en esta temporada, para poder reclamar mas de una vez compra vip!`)], ephemeral: true});
      
      stats.coins += 200;
      stats.claimedCoins = true;
      await stats.save();
      
      interaction.reply({ embeds: [new MessageEmbed().setColor('GREEN').setDescription(`🪙 Se te acreditaron las 200 coins de la temporada correctamente!`)], ephemeral: false});
    }
    

    },
};

async function giveCoins(interaction, coinsModel, stats, coins, rango) {
  stats.coins += coins;
  await coinsModel.create({ name: stats.name });
  await stats.save();
  
  interaction.reply({ embeds: [new MessageEmbed().setColor('GREEN').setDescription(`🪙 Se te acreditaron las ${coins} coins por ser ${rango} correctamente!`)], ephemeral: false });
};