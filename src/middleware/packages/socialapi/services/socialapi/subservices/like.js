/** @type {import('moleculer').ServiceSchema} */
const LikeService = {
  name: 'socialapi.like',
  dependencies: [],
  actions: {
    async updateCollectionsOptions(ctx) {
      return await ctx.call('activitypub.like.updateCollectionsOptions', ctx.params);
    }
  }
};
module.exports = LikeService;
