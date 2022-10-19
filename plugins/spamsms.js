let { MessageType } = require('@adiwajshing/baileys') 

 

let fetch= require('node-fetch') 

let util = require('util')

let handler = async  (m, { text, args}) => {

let hasil

                    

                    if (args.length == 0) return m. reply(`Format Salah! 

 *Contoh*: ${usedPrefix}spamsms 628**********`)

                    let nomor = args[0]

                    

                    

                    let timeout = 5000

                    

                    let apikey = '31d6c747fd7bd984fb6f7d95'

                        conn.reply(m.chat, `Sedang melakukan spam`, m) 

 

                        hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam1?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 1`, m) 

                        console.log(hasil) 

  

                       

                        hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam2?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 2`, m) 

                        console.log(hasil) 

                        

                       hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam3?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 3`, m) 

                        console.log(hasil) 

                        

                        hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam4?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 4`, m) 

                        console.log(hasil) 

  

                       	                        hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam5?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 5`, m) 

                        console.log(hasil) 

  

            

                        hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam6?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 6`, m) 

                        console.log(hasil) 

                         

                        hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam7?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 7`, m) 

                        console.log(hasil) 

 

                           

                        hasil = await fetch(`https://api.lolhuman.xyz/api/sms/spam8?apikey=31d6c747fd7bd984fb6f7d95&nomor=${nomor}`) 

                        hasil = await hasil.json()

                        conn.reply(m.chat, `Berhasil melakukan spam 8`, m) 

                        console.log(hasil) 

  

 

                        function done() { conn.reply(m.chat, `Berhasil Spam ${nomor}`,m) }

                        

                        setTimeout(done, timeout + 45000) 

                        

                    

                }

handler.help = ['spamsms']

handler.tags = ['premium']

handler.command = /^s(pamsms)$/i

handler.owner = false

handler.mods = false

handler.premium = true

handler.group = false

handler.private = false

 

handler.admin = false

handler.botAdmin = false

 

handler.fail = null

 

module.exports = handler
