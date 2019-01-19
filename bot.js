const Discord = require('discord.js'); 

const Util = require('discord.js');

const GOOGLE_API_KEY = "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8"

const getYoutubeID = require('get-youtube-id');

const Canvas = require("canvas");

const jimp = require("jimp");

const convert = require("hh-mm-ss");

const dateFormat = require('dateformat');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4"; 

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const moment = require('moment');

const client = new Discord.Client({disableEveryone: true});

const request = require('request');

const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setGame(`# FiloridaShop`,'https://www.twitch.tv/v5bz');
});

 
//كود الولكم

client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', '•-filoridashop');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    



const w = ['./img/w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});


 //كود الموف


 //كود التقديم
client.on('message', async (message) => {
  if(message.content.startsWith("#تقديم")) {
    await message.channel.send("**ما اسمك ؟**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let qest = '';
    let questions = [
      '**ماذا راح تبيع و ازبات انك ما راح تنصب**',
      ]
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
      .then(collected => {
        lan = collected.first().content
        collected.first().delete()
        e.delete();
        message.channel.send('** كم عمرك ؟**').then(m => {
        let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
          .then(co => {
            md = co.first().content
            co.first().delete()
            m.delete();
            let question = questions[Math.floor(Math.random() * questions.length)]
            message.channel.send(question).then(ms => {
            let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
              .then(col => {
                br = col.first().content
                col.first().delete()
                ms.delete()
                message.channel.send('جاري التقديم ..').then(b => {
                setTimeout(() => { 
                  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
                },2000);
                var gg = message.guild.channels.find('name', '•-admin-sumbite')
                if(!gg) return;
                if(gg) {
                  gg.send({
                      embed : new Discord.RichEmbed()
                      .setDescription(`** ما اسمك ❓ : \n ${lan}\كم عمرك 🔗 :\n ${md} \n ${question}❓ :\n ${br} \nتم التقديم بواسطة : <@${message.author.id}> **`)
                      .setFooter(`PowerShop™`)
                      .setTimestamp()
                    });
                  } 
                })
              })
            })
          })
        })
      })
    })
  }
})	


//قبول - رفض
client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('535971403988467727');

if(message.content.startsWith(prefix + "refused")) {

if(message.guild.id !== '535950261852700674') return;

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}
[ ❌ ] :: لقد تم رفض العضو`);

}

});
  

    
client.on('message',async message => {

let mention = message.mentions.members.first();

let Room = client.channels.get('535971403988467727');

if(message.content.startsWith(prefix + "accept")) {

if(message.guild.id !== '535950261852700674') return;

 if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));


if(!mention) return message.reply("منشن شخص");



Room.send(`
**» العضو :** ${mention}
[ ✅ ] :: لقد تم قبول العضو واعطائه رتبة بائع`);

}

});

//نشر اكواد


  
            
                

          

            
            

                

          
        

      

  
client.on("message", message => {

    if (message.content.startsWith("#bbc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
 
 //كود البرودكاست
 
 client.on("message", message => {

    if (message.content.startsWith("#bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
//كود منشن لو منشنت البوت يرد عليك 




client.on('message', message => {
    if (message.content.startsWith("."))
    
    message.channel.send("**Welcome To FloridaShop**🎉");
    
      



});


//كود عدد الاشخاص
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setCount")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
    console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Members Count : [ ${message.guild.members.size} ]`)
    },1000);
  });
  }
});




//كود معلومات السيرفر
 
 client.on('message', message => {
var prefix = "." // البريفكس
if(message.content.startsWith(prefix +"server")){ // الامر
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});
 
       

 
 //كود معلومات الروم
 
   client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "$"; // البريفكس
if(message.content.startsWith(prefix + 'room')) { // الامر
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("معلومات الروم")
      .setColor("RANDOM")
      .setDescription(`ايدي الروم <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("صنع في", `${channel.createdAt}`)
      .addField("نوع الروم", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });
 
 //كود حالة الاعضاء
 
 client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='#fm')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('🌷| Members info')
         .addBlankField(true)
         .addField('📗| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('➡| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });
 
 

//كود اوتو رول


client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", ".FiloridaShop");
   member.addRole (role);
  
})



//كود تم الدعوه بواسطه

var dat = JSON.parse(fs.readFileSync('./invite.json', 'utf8'));
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("535950261852700674")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', "•-floridashop");
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.get("535950261852700674")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
 channel.send(`**Welcome To FloridaShop** :gem: \n Have a Nice Time 🎶 \n ${member} Invited By ${Invite.inviter}`)
 }
            dat[Inv] = Invite.uses;
        })
    })
});

 


client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    if (message.content.toLowerCase().startsWith(prefix + `help`)) {
      const embed = new Discord.RichEmbed()
      .setTitle(`:mailbox_with_mail: Help`)
      .setColor(0xCF40FA)
      .setDescription(`مرحباٌ! I'm ${client.user.username}, هذا البوت خاص للتذاكر لمساعره فريق العمل و هذه هي الاوامر:`)
      .addField(`Tickets`, `[${prefix}new]() > لفتح تذكره جديده و منشنه اعضاء دعم السرفر \n[${prefix}close]() > لغلق التذكره التي تم فتحها من قبل الدعم`)
      .addField(`Other`, `[${prefix}help]() > لرؤيه قائمه الاوامر \n[${prefix}ping]() > لمعرفه البينق الخاص للبوت \n[${prefix}about]() > لمعرفه كل شي عن البوت`)
      message.channel.send({ embed: embed });
    }
  
    if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
      message.channel.send(`Hoold on!`).then(m => {
      m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
      });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `new`)) {
      const reason = message.content.split(" ").slice(1).join(" ");
      if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`هذا السيرفر ليس لديه \`Support Team\` صنع رتبة, لذلك لن يتم فتح التذكرة.\nاذا كنت تمتلك administrator, إنشاء اسم بهذا الاسم بالضبط وإعطائه للمستخدمين الذين يمكنهم مشاهدة التذاكر.`);
      if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`انت بالفعل لديك تذكره مفتوحه.`);
      message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
          let role = message.guild.roles.find("name", "Support Team");
          let role2 = message.guild.roles.find("name", "@everyone");
          c.overwritePermissions(role, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          c.overwritePermissions(role2, {
              SEND_MESSAGES: false,
              READ_MESSAGES: false
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          let mrx = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`:white_check_mark: تم إنشاء تذكرتك, #${c.name}.`)
          .setTimestamp()
          message.channel.sendEmbed(mrx);
          const embed = new Discord.RichEmbed()
          .setColor(0xCF40FA)
          .addField(`مرحباً ${message.author.username}!`, `من فضلك وضح لماذا قمت بفتح التذكره مع بعض التفاصيل. مسؤلي السرفر سوف يكونوا موجودين في اسرع وقت للمساعده.`)
          .setTimestamp();
          c.send({ embed: embed });
      }).catch(console.error);
  }
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
      if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر.`);
  
      message.channel.send(`هل أنت متاكد؟ بمجرد تأكيد, لا يمكنك عكس هذا العمل!!\nللتأكيد ، اكتب \`-confirm\`. سوف ينتهي المهلة خلال 10 ثوانٍ ويتم إلغاؤها.`)
      .then((m) => {
        message.channel.awaitMessages(response => response.content === '-confirm', {
          max: 1,
          time: 10000,
          errors: ['time'],
        })
        .then((collected) => {
            message.channel.delete();
          })
          .catch(() => {
            m.edit('انتهى إغلاق التذاكر ، لم يتم إغلاق التذكرة.').then(m2 => {
                m2.delete();
            }, 3000);
          });
      });
  }
  
  });
  
  client.on('message', message => {
      if (message.content.startsWith(prefix + 'about')) {
      if (message.author.bot) return
      if (!message.guild) return message.reply('**:x: This Command Only In Server**')
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(':mailbox_with_mail: about')
      .setDescription(`I am ${client.user.username}, and I will try my best to help everyone! If I am in a discord server, people can use me to create tickets in order`)
      .setFooter(`${client.user.username}`)
      message.author.sendEmbed(embed)
      }
  });
  

          
 
        const devs = ["467777208732352512"]
 
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
  client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else    
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/mohamedgamal");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
 
  });
 
              
 
     

//توكن البوت 
client.login(process.env.BOT_TOKEN);
