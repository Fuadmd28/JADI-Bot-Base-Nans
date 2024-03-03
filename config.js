import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6282147781510', 'Bang FD', true],
  ['6282147781510']
] // nomor owner

global.mods = ['628588379'] 
global.prems = ['6282147781510', '6285174306183']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.betabotz.eu.org': 'nananakorang'
}

// Apikey lu
global.lann = 'nananakorang'

// setting limit user
global.limit = 69

// Sticker WM
global.packname = 'Sticker' 
global.author = '@nans' 
//--info NS [ NANS ]
global.NSnama = 'Serene Simple Bot WhatsApp'
global.NSig = 'https://www.instagram.com/nansoffc' 
global.NSgc = 'https://whatsapp.com/channel/0029VaBl0VOAInPsCK1JJG3A'
global.NSthumb = 'https://i.ibb.co/Bt5GrzK/serene-by-nansoffc-simple-bot-whatsapp.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.eror = 'Error, Kesalahan tidak terduga'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // max warning

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
