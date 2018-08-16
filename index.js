const botconfig = require("./botconfig.json");
//const tokenfile = require("./token.json");
const Discord = require("discord.js");
const token = process.env.token;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() =>{
  console.log(`${bot.user.username} is online`);
  bot.user.setActivity("Robate este bot tambien puto!", {type: "Streaming"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

//COMANDOS

  let gif1 = "./Gif/Gif1.gif"; gif2 = "./Gif/Gif2.gif"; gif3 = "./Gif/Gif3.gif";
  if (cmd === `${prefix}gif`){
          let number = 3
          var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
          switch(random) {
            case 1: message.channel.send({ files: [gif1]}); break;
            case 2: message.channel.send({ files: [gif2]}); break;
            case 3: message.channel.send({ files: [gif3]}); break;
      }




  return;
  }







if(cmd === `${prefix}kick`){

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));
  if(!kUser) return message.channel.send("Couldn't find user.");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
  if(kUser.hasPermission("MANAGE_MESSAGES"))return message.channel.send("Than person can't be kicked");


  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#8129aa")
  .addField("Kick User", `${kUser} with ID: ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "reports");
  if(!kickChannel) return message.channel.send("Couldn't find reports channel.");


  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);


  return;

}

if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));
    if(!bUser) return message.channel.send("Couldn't find user.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be baned!");
    if(bUser.hasPermission("MANAGE_MESSAGES"))return message.channel.send("Than person can't be baned");


    let banEmbed = new Discord.RichEmbed()
    .setDescription("~BAN~")
    .setColor("#8129aa")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Ban By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Baned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "reports");
    if(!banChannel) return message.channel.send("Couldn't find reports channel.");


    message.guild.member(bUser).ban(bReason);
    banChannel.send(banEmbed);


  return;
}




if(cmd === `${prefix}report`){

  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arg[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#8129aa")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

  return;
}

  if(cmd === `${prefix}Hi`){
    return message.channel.send("Omae we mo shinderu!! >:v");
}

  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello!");
  }

  if(cmd === `${prefix}serverinfo`){

      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("#8129aa")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You joined", message.guild.joinedAt)
      .addField("Ttal Members", message.guild.memberCount);

      return message.channel.send(serverembed);
  }


});



bot.login(index.js.token);
