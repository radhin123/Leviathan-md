let fetch = require('node-fetch')

let fs = require('fs')

 

let handler = async (m, { conn }) => {

	let res = await (await fetch('https://raw.githubusercontent.com/Zivfurr/HAORI-API/main/furry.json'))	if (!res.ok) throw await `${res.status} ${res.statusText}`; 

    let json = await res.json(); 

    let url = json[Math.floor(Math.random() * json.length)] 

await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Kawai >_<', wm, 'NEXT', '.furry', m, { quoted: m, contextInfo: { 

         externalAdReply: { 

             title: 'Haori Suka Furry UωU',

             body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Haori Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Haori Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,

             description: 'Now Playing...', 

             mediaType: 2, 

           thumbnail: await (await fetch('https://telegra.ph/file/1f8e012df6e4aca2fbd11.jpg')).buffer(), 

          mediaUrl: `https://youtu.be/35w7z9QFLwY` 

         } 

      } 

   })

}

function pickRandom(list) {

  return list[Math.floor(Math.random() * list.length)]

}

handler.help = ['furry']

handler.tags = ['furry'] 

handler.command = /^(furry)$/i

handler.limit = true

handler.register = true

 

handler.limit = true

 

module.exports = handler
