const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/tboy-tm/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5";
global.website=process.env.GURL || "https://chat.whatsapp.com/E9gwnn6w48dKPLez1BBNt5" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349130371354";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_02_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMyxcbiAgICAgICAgODksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc2LFxuICAgICAgICA2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInR5aEFnOXplME5UWGRLTEM3ZXFCUk9DU3dkQm9IbFNEc3E1SjVSN2lXNmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdXUTBOaWlTUm51SkJyVFpoM3haaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTQ0YmM4MzMtYzM3NC00YTJlLTkwMWMtNDEyNGUzZGVjMGIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDE0MSxcbiAgICAgIDE0NixcbiAgICAgIDQzLFxuICAgICAgNSxcbiAgICAgIDE5NSxcbiAgICAgIDc4LFxuICAgICAgMTU0LFxuICAgICAgMTc3LFxuICAgICAgMSxcbiAgICAgIDIxMCxcbiAgICAgIDI0LFxuICAgICAgMTQxLFxuICAgICAgMjQ3LFxuICAgICAgMjQ0LFxuICAgICAgMjA5LFxuICAgICAgMTcsXG4gICAgICAyMjIsXG4gICAgICAxNCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjM3LFxuICAgICAgMjM1LFxuICAgICAgMjU0LFxuICAgICAgMTQ2LFxuICAgICAgMjI0LFxuICAgICAgMjE0LFxuICAgICAgMjIxLFxuICAgICAgMyxcbiAgICAgIDY1LFxuICAgICAgMjAzLFxuICAgICAgMTQwLFxuICAgICAgMTE0LFxuICAgICAgMjE4LFxuICAgICAgMjUzLFxuICAgICAgOSxcbiAgICAgIDMxLFxuICAgICAgMTY1LFxuICAgICAgMjMxLFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlcxWUdTQlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzAzNzEzNTQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA2NTQ1NjczMTc1MTg1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0hlMU93SEVJVEh6Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoRndCTDJBY2haQXJmM1NyRlAzQjVaRGVkN2hoV0Z0Mmt1bHdpTVMwVDFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9BVGRReGIzNXJNSUlBSmQ5TWtKZi9LOTBJa2VhRURRMHZsNWJjTWJRdURNTzQ2T2tZa1pnMm84TFA5RDVhcTUwVVJEcit5QzUxMHNaN0kveEcrcEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxlSUtTZC82UEp4K2k2SURsUUVnNjJEamxMY3NjbEdPVW5QQnM4R2YyOGFXcmg0RHN3ZXQxbEppV0NqbFVCeFNWd0lUSWVNcG1SZ21ZSUpDVTVHN2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzAzNzEzNTQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODM4MTUyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ꪻ᥇ꪮꪗ",
  packname: process.env.PACK_NAME || "†",
  botname : process.env.BOT_NAME  || "ꪻ᥇ꪮꪗ™"
  ownername:process.env.OWNER_NAME|| "ꪻ᥇ꪮꪗ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "eM8Wi4GuwnipWihNVFe65rAJ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
