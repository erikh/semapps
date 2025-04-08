/** @type {import('moleculer').ServiceSchema} */
const OutboxService = {
  name: 'socialapi.outbox',
  dependencies: [],
  actions: {
    async post(ctx) {
      return await ctx.call('activitypub.outbox.post', ctx.params);
    },
    async updateCollectionsOptions(ctx) {
      return await ctx.call('activitypub.outbox.updateCollectionsOptions', ctx.params);
    }
  }
};
module.exports = OutboxService;
