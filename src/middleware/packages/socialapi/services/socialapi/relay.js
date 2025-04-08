/** @type {import('moleculer').ServiceSchema} */
const RelayService = {
  name: 'socialapi.relay',
  dependencies: ['activitypub.relay'],
  created() {},
  actions: {
    async getActor(ctx) {
      return await ctx.call('activitypub.relay.getActor', ctx.params);
    }
  }
};
module.exports = RelayService;
