const os = require('os');

module.exports = {
  config: {
    name: 'info',
    aliases: ['about', 'admininfo', 'serverinfo'],
    permission: 0,
    prefix: 'both',
    categorie: 'Utilities',
    credit: 'Developed by Mohammad Nayan',
    usages: [`${global.config.PREFIX}info - Show admin and server information.`],
  },
  start: async ({ event, api, message }) => {
    try {
      const uptimeSeconds = process.uptime();
      const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

      const adminListText =
        global.config.admin.length > 0
          ? global.config.admin
              .map((id, i) => `${i + 1}. @${id.split('@')[0]}`)
              .join('\n')
          : 'No admins found.';

      const infoMessage = `
--------------------------------------------
𝐍𝐚𝐦𝐞           : —͞MAHIDㅤ𝖲ɪʀ  !!么♡゙🎐🕸️
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤       : 𝐌𝐚𝐡𝐢𝐝 𝐁𝐡𝐚𝐢𝐲𝐚
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧       : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐓𝐚𝐧𝐠𝐚𝐢𝐥, 𝐃𝐡𝐚𝐤𝐚
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐌𝐨𝐲𝐦𝐨𝐧𝐬𝐢𝐧𝐡, 𝐃𝐡𝐚𝐤𝐚 𝐁𝐲𝐩𝐚𝐬𝐬
𝐆𝐞𝐧𝐝𝐞𝐫       : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟐𝟎+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐊𝐨𝐢𝐭𝐚𝐦 𝐍𝐚
𝐖𝐨𝐫𝐤         : 𝐒𝐭𝐮𝐫𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : mohammadrana321123@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩   : wa.me/+8801842290314
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦     : t.me/you_mahid1
𝐓𝐢𝐤𝐓𝐨𝐤    : tiktok.com/mahid_bbz01

--------------------------------------------
\`\`\`
🖥️ Server Info:
• Platform       : ${os.platform()}
• CPU            : ${os.cpus()[0].model}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
\`\`\``;

      await api.sendMessage(
            event.threadId,
            { image: { url: "https://i.postimg.cc/2y9bTqv6/retouch-2025071913433217.jpg" }, caption: infoMessage || '' },
            { quoted: event.message }
          );;
    } catch (error) {
      console.error(error);
      await api.sendMessage(event.threadId, '❌ An error occurred while fetching info.', { quoted: event.message });
    }
  },
};
