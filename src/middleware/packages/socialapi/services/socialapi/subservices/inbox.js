/** @type {import('moleculer').ServiceSchema} */
const InboxService = {
  name: 'socialapi.inbox',
  dependencies: [],
  actions: {
    async getByDates(ctx) {
      return await ctx.call('activitypub.inbox.getByDates', ctx.params);
    },
    async updateCollectionsOptions(ctx) {
      return await ctx.call('activitypub.inbox.updateCollectionsOptions', ctx.params);
    }
  }
};
module.exports = InboxService;
