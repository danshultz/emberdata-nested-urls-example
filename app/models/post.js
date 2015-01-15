import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  shortTitle: DS.attr('string'),
  userId: DS.attr('number'),
  user: DS.belongsTo('user')
});
