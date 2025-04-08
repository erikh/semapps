/** @type {import('moleculer').ServiceSchema} */
const ActorService = {
  name: 'socialapi.actor',
  dependencies: [],
  actions: {
    async getProfile(ctx) {
      return await ctx.call('activitypub.actor.getProfile', ctx.params);
    },
    async get(ctx) {
      return await ctx.call('activitypub.actor.get', ctx.params);
    },
    async awaitCreateComplete(ctx) {
      return await ctx.call('activitypub.actor.awaitCreateComplete', ctx.params);
    },
    async addEndpoint(ctx) {
      return await ctx.call('activitypub.actor.addEndpoint', ctx.params);
    },
    async getCollectionUri(ctx) {
      return await ctx.call('activitypub.actor.getCollectionUri', ctx.params);
    }
  }
};
module.exports = ActorService;
