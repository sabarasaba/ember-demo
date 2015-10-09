import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperty: ['amount:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperty')
});
