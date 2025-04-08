/** @type {import('moleculer').ServiceSchema} */
const CollectionsRegistryService = {
  name: 'socialapi.collections-registry',
  dependencies: [],
  actions: {
    async createAndAttachCollection(ctx) {
      return await ctx.call('activitypub.collections-registry.createAndAttachCollection', ctx.params);
    },
    async register(ctx) {
      return await ctx.call('activitypub.collections-registry.register', ctx.params);
    },
    async updateCollectionsOptions(ctx) {
      return await ctx.call('activitypub.collections-registry.updateCollectionsOptions', ctx.params);
    }
  }
};
module.exports = CollectionsRegistryService;
