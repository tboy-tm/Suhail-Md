const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Tboytm:vdUQpHCI0zvK8FW7@cluster0.6aa7wqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ꪻ᥇ꪮꪗ™" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349045613439";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139189829";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_32_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTczLFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJweFhVM1dwdXVMRTF5S1dyQ2lFY0dmZk14ekRaSVNWK3FYajk1N0svUFNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxTmJoVFlRNVNGLUstZTJ2NUh3OXd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjYWVhMDgyLWZiZDEtNDI3NS1hZmU2LWY5OTQ1MTlkNjExNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDE2OCxcbiAgICAgIDQ1LFxuICAgICAgOTEsXG4gICAgICAxOTMsXG4gICAgICAzNSxcbiAgICAgIDIzNCxcbiAgICAgIDEwMCxcbiAgICAgIDI0NCxcbiAgICAgIDc1LFxuICAgICAgMjI0LFxuICAgICAgMjA2LFxuICAgICAgMTAzLFxuICAgICAgNzcsXG4gICAgICA4MixcbiAgICAgIDUyLFxuICAgICAgNjYsXG4gICAgICAyMjMsXG4gICAgICAwLFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDIwNCxcbiAgICAgIDQwLFxuICAgICAgOTksXG4gICAgICAzNCxcbiAgICAgIDQ5LFxuICAgICAgNyxcbiAgICAgIDUyLFxuICAgICAgMjMwLFxuICAgICAgMjQ1LFxuICAgICAgMTg5LFxuICAgICAgMTA2LFxuICAgICAgOTEsXG4gICAgICAxMyxcbiAgICAgIDEzMSxcbiAgICAgIDE4MCxcbiAgICAgIDI0MSxcbiAgICAgIDIwMSxcbiAgICAgIDc4LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpEWktBV05YXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM5MTg5ODI5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUUklQTEUgQVwiLFxuICAgIFwibGlkXCI6IFwiMTA2MzI2NTk2MjU1ODU5OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlMrdDZNRUVOR0N3YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpQk5jNTVzU2cyRm8zZWtPdklyeE5kY1BNd0JaM3YyYXFLU2txWW5hbmwwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNtZXBnK3ppdDR6NFdFUVd5ZHU3b2EzTTFMTG4wRGl1d2xkckMwdjZoWFh1Y3VpcWs3TFJqLzloSEc1N0xFZ3FObWQ4d0kwZHpUOWo2Wmk4VXlJVENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVURkcyM3JDdnlGTlEvaHR1d2lHWTMwT3BPa2kvdW4zWU5jc2NmM3ZHc2szbVcvaDI1eVRzRk16MzEwend1UHBEeTZOR3VNN1BCY05reTdOSEY5MkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzkxODk4Mjk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcyOTk0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhraFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGtoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3JaTUwzUzlCM3ZhQU92dUd3ZzJtOG9zRXRFMS9GYjBxK2plMWlvVHVYWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTQ4MDUxMjgzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNzI5ODYwNjgxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "'",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ꪻ᥇ꪮꪗ™",
  packname: process.env.PACK_NAME || "†",
  botname : process.env.BOT_NAME  || "TRIPLE-A",
  ownername:process.env.OWNER_NAME|| "TRIPLE-A",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "eM8Wi4GuwnipWihNVFe65rAJ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "GOKU"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "601a300339f538ac289f4f731cc4815d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
