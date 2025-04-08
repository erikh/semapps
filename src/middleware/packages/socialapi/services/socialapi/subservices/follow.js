/** @type {import('moleculer').ServiceSchema} */
const FollowService = {
  name: 'socialapi.follow',
  dependencies: [],
  actions: {
    async isFollowing(ctx) {
      return await ctx.call('activitypub.follow.isFollowing', ctx.params);
    },
    async updateCollectionsOptions(ctx) {
      return await ctx.call('activitypub.follow.updateCollectionsOptions', ctx.params);
    }
  }
};
module.exports = FollowService;
