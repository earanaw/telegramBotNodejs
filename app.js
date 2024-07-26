import {Telegraf} from'telegraf';
import dotenv from 'dotenv'
dotenv.config()

<<<<<<< HEAD
const bot = new Telegraf(process.env.BOT_TOKEN);
=======
const bot = new Telegraf('TOKEN');
>>>>>>> 02241f11b4cd4e772273e0edb72f8417a5819564

bot.start((ctx) => ctx.reply('Bienvenido!'));
bot.help((ctx) => ctx.reply('Cómo puedo ayudarte amigo?'));
bot.on('text', (ctx) => {
    ctx.reply(`Recibido tu mensaje: ${ctx.message.text}`);
});

bot.launch();
console.log('Bot de Telegram iniciado');
