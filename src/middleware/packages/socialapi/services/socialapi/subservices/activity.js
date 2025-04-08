/** @type {import('moleculer').ServiceSchema} */
const ActivityService = {
  name: 'socialapi.activity',
  dependencies: [],
  actions: {
    async getContainerUri(ctx) {
      return await ctx.call('activitypub.activity.getContainerUri', ctx.params);
    }
  }
};
module.exports = ActivityService;
