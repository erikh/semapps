/** @type {import('moleculer').ServiceSchema} */
const ObjectService = {
  name: 'socialapi.object',
  dependencies: [],
  actions: {
    async createTombstone(ctx) {
      return await ctx.call('activitypub.object.createTombstone', ctx.params);
    }
  }
};
module.exports = ObjectService;
