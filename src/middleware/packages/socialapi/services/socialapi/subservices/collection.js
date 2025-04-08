/** @type {import('moleculer').ServiceSchema} */
const CollectionService = {
  name: 'socialapi.collection',
  dependencies: [],
  actions: {
    async post(ctx) {
      return await ctx.call('activitypub.collection.post', ctx.params);
    },
    async add(ctx) {
      return await ctx.call('activitypub.collection.add', ctx.params);
    },
    async get(ctx) {
      return await ctx.call('activitypub.collection.get', ctx.params);
    },
    async getContainerUri(ctx) {
      return await ctx.call('activitypub.collection.getContainerUri', ctx.params);
    },
    async includes(ctx) {
      return await ctx.call('activitypub.collection.includes', ctx.params);
    },
    async isEmpty(ctx) {
      return await ctx.call('activitypub.collection.isEmpty', ctx.params);
    },
    async remove(ctx) {
      return await ctx.call('activitypub.collection.remove', ctx.params);
    }
  }
};
module.exports = CollectionService;
