const ActivityService = require('./subservices/activity');
const ActorService = require('./subservices/actor');
const CollectionService = require('./subservices/collection');
const CollectionsRegistryService = require('./subservices/collections-registry');
const FollowService = require('./subservices/follow');
const InboxService = require('./subservices/inbox');
const LikeService = require('./subservices/like');
const ObjectService = require('./subservices/object');
const OutboxService = require('./subservices/outbox');
const ReplyService = require('./subservices/reply');

const SocialApiService = {
  name: 'socialapi',
  dependencies: [],
  created() {
    this.broker.createService({
      mixins: [ActivityService]
    });
    this.broker.createService({
      mixins: [ActorService]
    });
    this.broker.createService({
      mixins: [CollectionService]
    });
    this.broker.createService({
      mixins: [CollectionsRegistryService]
    });
    this.broker.createService({
      mixins: [FollowService]
    });
    this.broker.createService({
      mixins: [InboxService]
    });
    this.broker.createService({
      mixins: [LikeService]
    });
    this.broker.createService({
      mixins: [ObjectService]
    });
    this.broker.createService({
      mixins: [OutboxService]
    });
    this.broker.createService({
      mixins: [ReplyService]
    });
  }
};

module.exports = SocialApiService;
