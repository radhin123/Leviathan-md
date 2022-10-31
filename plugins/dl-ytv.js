let limit = 50
let fetch = require('node-fetch')
/*let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    let chat = db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    conn.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : data.wait, m)
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } } catch (e) {}
    m.reply(data.wait)
    if (!isLimit) await conn.sendButtonVid(m.chat, dl_link, `*Title:* ${title}\n*Filesize:* ${filesizeF}`.trim(), wm, 'Audio', `.yta ${args}`, m, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm,
    thumbnail: bg,
    sourceUrl: data.sc
     }}
  })

}*/
/*[download via module di atas]*/
let { youtubeSearch } = require ('@bochilteam/scraper')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm... urlnya mana?'
  m.reply('_Proses..._')
  let vid = (await youtubeSearch(text)).video[0]
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = `https://botcahx2.ddns.net/?url=${url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`
  conn.sendMessage(m.chat, { video: { url: ytLink }, mimetype: 'video/mp4' }, { quoted: m })
}
/*[supaya suport Railway jadi make module lain]*/
handler.help = ['ytmp4 <query>']
handler.tags = ['downloader']
handler.command = /^yt(v(idi?e?o)?|mp4)?$/i
handler.limit = true
module.exports = handler