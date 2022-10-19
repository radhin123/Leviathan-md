let moment = require('moment-timezone')

let fs = require('fs')

let handler = async (m, { conn, command, text }) => {

let img = await (await fetch('https://telegra.ph/file/31757ced93834574d36a4.jpg')).buffer()

let user = global.db.data.users[m.sender]

conn.sendMessage(m.chat, {

    	react: {    		key: m.key

    	}

    })	

conn.sendButton(m.chat, ` *• SEWA BOT & UP TO PREMIUM •*

        

1. Grup / 30 Hari

Rp. 10,000 pulsa

2. Grup / 15 hari

Rp. 5,000 Pulsa

3. Sepuasnya 

Jadi pacar owner Awok2

wa.me/${owner[0]}

*Bukan Bot!!!*

*Owner ${conn.user.name}*

`, wm, 'Owner', '#owner', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: img

}}})

}

handler.help = ['sewa' , 'premium']

handler.tags = ['main']

handler.command = /^(sewa|rent(this)?(bot)?)$/i

 

module.exports = handler

function ucapan() {

    const time = moment.tz('Asia/Jakarta').format('HH')

    res = "Selamat dinihari 🎑"

    if (time >= 4) {

        res = "Good Morning 🌅"

    }

    if (time > 10) {

        res = "Good Afternoon 🏞️"

    }

    if (time >= 15) {

        res = "Good Afternoon 🌇"

    }

    if (time >= 18) {

        res = "Good Evening 🌃"

    }

    return res

}
