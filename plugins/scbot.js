let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `
Masih Private hehe
`, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
