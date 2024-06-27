const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";

module.exports = {
  //For Enabling Commands Like AUTO_STATUS_RED Type true For Disenabling Type false
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  //_________________________________________________________________________________________________________________________________
  LOGS: toBool(process.env.LOGS) || true,
  //_________________________________________________________________________________________________________________________________
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  //_________________________________________________________________________________________________________________________________
  AUTO_REACT: process.env.AUTO_REACT || 'false',
  //_________________________________________________________________________________________________________________________________
  AUDIO_DATA: process.env.AUDIO_DATA || "Phoenix-MD;Abhishek Suresh;https://graph.org/file/8976892f2f615077b48cd.jpg",
  //_________________________________________________________________________________________________________________________________
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'false',
  //_________________________________________________________________________________________________________________________________
  SESSION_ID: process.env.SESSION_ID || "", //Enter FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhLaWtQQnlVR1dQS0R6VUlKTTFHYkMxU3hOdXlDMDAvOStRYmR4SjUwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3lGd3JSZmg2THRuUEJQWHBobWNSYmRjdHo1dG9udnFDY1BxRVhabGNXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUFcyZGF4eUgwZCtkQkRYbmkrc2I0WWo1UTlyWnJwcXZmeWtJMW15azBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2dEZHV2ZvbDgxNG1Pb00xN2lKcFpIdGVyM3ZjU3lCcXdpd1ZLMUtIVmxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNajFFREw4K3V0VWdSZXhoV09hQW12aVZaUnZ2S09ONHI5RUVtZFhkVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFTVWZJQjhkSUxkdnYxczZ3MzA1a2pPZHhXcU80TkJnU2lNcms0TTE3aFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUI2YzNPcW9KN3dFRTNHOVhtOWdyU2orYmFkNGN4Uklpb2xXU1pXMkxGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU44dGIzVzZGRVNiY2MxMlRtbDB3NG5xZ2o5cFN2Y09lNk1jRFN5a1pTVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYzbklpZ2hWMncvZEZLQmxmZHhjNUJWdXkyNERiSytaTTJBK0lja3dpWU9tbTFKblV5Sm1SOU5OVHZqd0xEdXp2Q2hwSmdubUNTeFNHT0g1L3FvUGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiN0tDV1ZPMGI3cFNCaXpiU0xqSmFpV01QNW1ZVWFGMHo0YU1hSGw2QURSRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiME83LUJURXdUX1NpOGdoWFVvNnlwZyIsInBob25lSWQiOiJjMzc2OGQ2NS05ZTVkLTRmOTMtYjA3Zi0yZWI2OGU1ZjBiZDYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzI2VHdvMzZCclFPY0NvL3dqVFE2bTYvYmpZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXYjVkVXNWSm82SXBkS3g3cTArT2dNc3FPVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4NlFLU0VKUyIsIm1lIjp7ImlkIjoiMjM0NzA2NjU3NTY4NTo0NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnVqa2F3SEVQRys5N01HR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic201bnVPM2ppUmdNcXovTFkzSDVCMW9nY1dvZmRaN0pIaE5qZGZEdkRrbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibmZtM3FCTEFJSVZlSEZXbkh0Qzl2a0xBK1hrVm9abCt1VytpdnRLZng0RnVrSk5ubWVHcm5laXlZVS9FbWFFdTdSM1dvb0kvZXgvQ1FINVdNYUVPQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkFLREYyVkg5VWFLSUVIWjA3c3lWb0Z5ZjhOR2dwZ2J1SW5ZRTFoNDRRcExEYUl1WFhTc0wvKy9zSGFKSklNcHp5MUxoRjl1STJ4VjFETmg3ZGxQamdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA2NjU3NTY4NTo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiSnVaN2p0NDRrWURLcy95Mk54K1FkYUlIRnFIM1dleVI0VFkzWHc3dzVLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NTI1MjQ2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJROCJ9 Session Id Here
  //_________________________________________________________________________________________________________________________________
  SUDO: process.env.SUDO || "2347066575685",
  //_________________________________________________________________________________________________________________________________
  SPAM_COUNT: process.env.SPAM_COUNT || "10",
  //_________________________________________________________________________________________________________________________________
  LANG: process.env.LANG || "EN",
  //_________________________________________________________________________________________________________________________________
  HANDLERS: process.env.PREFIX || '*',
  //_________________________________________________________________________________________________________________________________
  RMBG_KEY: process.env.RMBG_KEY || false,
  //_________________________________________________________________________________________________________________________________
  BRANCH: "main",
  //_________________________________________________________________________________________________________________________________
  STICKER_DATA: "🎯𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳;𝙰𝚋𝚑𝚒𝚜𝚑𝚎𝚔 𝚂𝚞𝚛𝚎𝚜𝚑☘️",
  //_________________________________________________________________________________________________________________________________
  WELCOME_MSG: process.env.WELCOME_MSG || "👋 Hello *@user* Welcome To Our Group *@gname*\n*Total Members:* @count\n*Group Description:*\n@gdesc {pp}",
  //_________________________________________________________________________________________________________________________________
  GOODBYE_MSG: process.env.GOODBYE_MSG || "👋 GoodBye *@user* From *@gname*\n*Total Members:* @count {pp}",
  //_________________________________________________________________________________________________________________________________
  DATABASE_URL: DATABASE_URL,
  //_________________________________________________________________________________________________________________________________
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  //_________________________________________________________________________________________________________________________________
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  //_________________________________________________________________________________________________________________________________
  OWNER_NAME: process.env.OWNER_NAME || "okeke paschal",
  //_________________________________________________________________________________________________________________________________
  OWNER_NUMBER: process.env.OWNER_NUMBER || "918157993101",
  //_________________________________________________________________________________________________________________________________
  BOT_NAME: process.env.BOT_NAME || "Phoenix-MD",
  //_________________________________________________________________________________________________________________________________
  WORK_TYPE: process.env.MODE || "public",
  //_________________________________________________________________________________________________________________________________
  MENTION_DATA: "01:43 ━━━━●───── 03:50;⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆;919074692450;https://graph.org/file/63942461d4b8d78b360d3.jpg",
  //_________________________________________________________________________________________________________________________________
  MENTION_AUDIO: "https://i.imgur.com/NCifJWe.mp4;https://graph.org/file/ecf0772cb95111796848c.mp4",
  //_________________________________________________________________________________________________________________________________
  MENTION: process.env.MENTION || 'true',
  //_________________________________________________________________________________________________________________________________
  BASE_URL: "https://abhi-api-bvws.onrender.com/",
  //_________________________________________________________________________________________________________________________________
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
