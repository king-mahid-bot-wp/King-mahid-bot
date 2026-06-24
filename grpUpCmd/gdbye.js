module.exports = {
  event: 'remove',
  handle: async ({ api, event }) => {
    const removedMembers = event.participants;
    for (const member of removedMembers) {
      await api.sendMessage(event.id, {
        text: `𝐆𝐨𝐨𝐝𝐛𝐲𝐞 @${member.split('@')[0]}, ভালো হয়ছে তোর জন্য গ্রুপ ঝামিলা..!!🙂✌🏻
        
 - 𝐀𝐛𝐚𝐫 𝐀𝐬𝐢𝐬 𝐆𝐫𝐨𝐮𝐩 𝐀 𝐀𝐠𝐞 𝐌𝐨𝐭𝐨𝐧 𝐀𝐝𝐝𝐚 𝐃𝐢𝐬, 𝐁𝐨𝐲 𝐣𝐨𝐧𝐧𝐨 𝐠𝐞𝐥𝐨 𝐁𝐨𝐰 𝐍𝐢𝐲𝐞 𝐆𝐡𝐮𝐦𝐚𝐢𝐬 𝐆𝐫𝐨𝐮𝐩 𝐓𝐡𝐚𝐤𝐚 𝐃𝐨𝐫𝐤𝐚 𝐍𝐚𝐢..!!
 
╚═══—͞MAHIDㅤ𝖲ɪʀ  !!么♡゙🎐🕸️═══╝`,
        mentions: [member]
      });
    }
  }
};
