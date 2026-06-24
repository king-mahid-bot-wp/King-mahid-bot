module.exports = {
  event: 'add',
  handle: async ({ api, event }) => {
    const newMembers = event.participants;
    const groupInfo = await api.groupMetadata(event.id);
    const groupName = groupInfo.subject;
    const totalMembers = groupInfo.participants.length;

    for (const member of newMembers) {
      let profilePicUrl;
      try {
        profilePicUrl = await api.profilePictureUrl(member, 'image');
      } catch (error) {
        profilePicUrl = null;
      }

      const username = `@${member.split('@')[0]}`;
      const welcomeMessage = `🎉✨ *𝐇𝐞𝐲 ${username}, 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 ${groupName}!* ✨🎉\n\n` +
        `আসসলামুই আলাইকুম, কেমন আছেন আসা করে ভালো আছেন, আমাদের গ্রুপ জয়েন হয়ে আপনাকে ধন্যবাদ, সবাই সাথে চলা ফেরা করবেন..!!😌🫶🏻🎀
        
 𝐊𝐢𝐜𝐡𝐮 𝐊𝐡𝐚𝐫𝐚𝐩 𝐊𝐨𝐭𝐡𝐚 𝐁𝐨𝐥𝐛𝐞 𝐧𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐦𝐛𝐞𝐫 𝐒𝐚𝐭𝐡𝐞 𝐈𝐧𝐭𝐫𝐨 𝐊𝐨𝐫𝐮𝐧 𝐕𝐚𝐈 𝐁𝐨𝐧𝐞 𝐂𝐨𝐥𝐮𝐧. 𝐒𝐨𝐛𝐚𝐢 𝐬𝐚𝐭𝐡𝐞 𝐬𝐮𝐧𝐝𝐨𝐫 𝐦𝐨𝐭𝐨𝐧 𝐊𝐨𝐭𝐡𝐚 𝐛𝐨𝐥𝐛𝐞𝐧 𝐕𝐮𝐥 𝐤𝐢𝐜𝐡𝐮 𝐛𝐨𝐥𝐞 𝐓𝐡𝐚𝐤𝐥𝐞 𝐒𝐨𝐫𝐫𝐲 𝐁𝐨𝐥𝐛𝐞𝐧 𝐎𝐤𝐲 𝐓𝐧𝐱..!!🎀😽\n` +
        
        `👥 *𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬:* ${totalMembers}\n` +
        `📢 *𝐑𝐮𝐥𝐞𝐬:* 𝐓𝐡𝐚𝐧𝐤𝐬 𝐘𝐨𝐮 𝐆𝐫𝐨𝐮𝐩 𝐉𝐮𝐢𝐧
        
╚═══—͞MAHIDㅤ𝖲ɪʀ  !!么♡゙🎐🕸️═══╝`;

      if (profilePicUrl) {
        await api.sendMessage(event.id, {
          image: { url: profilePicUrl },
          caption: welcomeMessage,
          mentions: [member]
        });
      } else {
        await api.sendMessage(event.id, {
          text: welcomeMessage,
          mentions: [member]
        });
      }
    }
  }
};
