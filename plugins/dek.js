let handler = async (m, { conn, text, usedPrefix, command }) => {
let fetch = require("node-fetch")
let tio = 'LAWAK DEK DEK🤓'
 await conn.sendFile(m.chat, 'https://ffcdn-srv-1e2mf2sh6.filezone.cf/file/9jEsLrUmtIC~SDIXzH~j.opus', 'sample.opus', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo: {
        externalAdReply: { showAdAttribution: true, title: tio,
 body: wm, sourceUrl: 'https://chat.whatsapp.com/LhpFRMqsKkn6nrCCf1He9R', thumbnail: await (await fetch('https://telegra.ph/file/1356c326e5df18e1fd3df.jpg')).buffer()}} 
     })

}

handler.customPrefix = /^(dek|dek dek|lawak|🤓)$/i
handler.command = new RegExp

module.exports = handler
