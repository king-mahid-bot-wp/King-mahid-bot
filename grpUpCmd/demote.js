module.exports = {
  event: 'demote',
  handle: async ({ api, event }) => {
    const demotedMembers = event.participants;
    console.log(event);
    for (const member of demotedMembers) {
      await api.sendMessage(event.id, {
        text: `😢 @${member.split('@')[0]} 𝐇𝐚𝐬 𝐁𝐞𝐞𝐧 𝐃𝐞𝐦𝐨𝐝𝐞𝐭. বালে এডমিন নিয়ে নাটক করস ভালো থাক এডমিন ছাড়া..!!😒✌🏻
        
╚═══—͞MAHIDㅤ𝖲ɪʀ  !!么♡゙🎐🕸️═══╝``,
        mentions: [member]
      });
    }
  }
};
