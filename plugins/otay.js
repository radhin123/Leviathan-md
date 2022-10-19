let handler = async (m, { conn, command, text }) => {

const ftroli = {

	key : {    remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' 

                        },

       message: {

                    orderMessage: {

                            itemCount : 1,

                            status: 1,

                            surface : 1,

                            message: `Okey Kak ${conn.getName(m.sender)}`, //Kasih namalu

                            orderTitle: 'Bang',

                            thumbnail: await (await fetch('https://telegra.ph/file/c4a4bea15c41d62072b60.jpg')).buffer(), //Gambarnye

                            sellerJid: '0@s.whatsapp.net'

                          }

                        }

                      }

 conn.sendMessage(m.chat, {

    	react: {

    		text: "🫡",

    		key: m.key

    	}

    })	

conn.sendFile(m.chat, 'https://file.rizfurr.ml/file/DoKoHjPraHyWfaPCfLRI.webp', 'zivsan.png', 'Zivsan', ftroli)

 

}

handler.customPrefix = /^(ok|iya|sip|oky|okey)$/i

handler.command = new RegExp

 

module.exports = handler
