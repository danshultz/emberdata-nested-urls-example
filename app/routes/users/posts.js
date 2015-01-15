import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var user = this.modelFor('users/show');
    return this.store.find('user/post', { foo: 'bar', userId: user.id });
  },

  actions: {
    delete: function (item) {
      item.destroyRecord();
    }
  }
});
