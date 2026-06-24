module.exports = {
  event: 'promote',
  handle: async ({ api, event }) => {
    const promotedMembers = event.participants;
    console.log(event);
    for (const member of promotedMembers) {
      await api.sendMessage(event.id, {
        text: `🎉 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬 @${member.split('@')[0]}! 𝐊𝐚𝐧𝐧𝐚 𝐊𝐨𝐫𝐢𝐬 𝐍𝐚 𝐀𝐫 𝐓𝐨𝐫𝐞 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢𝐥𝐚𝐦 𝐄𝐛𝐚𝐫 𝐊𝐡𝐮𝐬𝐡𝐢𝐭𝐨..!!😒🙌🏻
        
╚═══—͞MAHIDㅤ𝖲ɪʀ  !!么♡゙🎐🕸️═══╝`,
        mentions: [member]
      });
    }
  }
};
