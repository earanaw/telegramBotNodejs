import {Telegraf} from'telegraf';

const bot = new Telegraf('5081397447:AAFIdvUzyXDNy-UA8zg3yMtBOVmVY_bvOsQ');

bot.start((ctx) => ctx.reply('Bienvenido!'));
bot.help((ctx) => ctx.reply('Cómo puedo ayudarte amigo?'));
bot.on('text', (ctx) => {
    ctx.reply(`Recibido tu mensaje: ${ctx.message.text}`);
});

bot.launch();
console.log('Bot de Telegram iniciado');