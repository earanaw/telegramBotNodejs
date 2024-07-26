import {Telegraf} from'telegraf';
import dotenv from 'dotenv'
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Bienvenido!'));
bot.help((ctx) => ctx.reply('Cómo puedo ayudarte amigo?'));
bot.on('text', (ctx) => {
    ctx.reply(`Recibido tu mensaje: ${ctx.message.text}`);
});

bot.launch();
console.log('Bot de Telegram iniciado');
