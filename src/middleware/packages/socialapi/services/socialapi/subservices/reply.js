/** @type {import('moleculer').ServiceSchema} */
const ReplyService = {
  name: 'socialapi.reply',
  dependencies: [],
  actions: {
    async updateCollectionsOptions(ctx) {
      return await ctx.call('activitypub.reply.updateCollectionsOptions', ctx.params);
    }
  }
};
module.exports = ReplyService;
