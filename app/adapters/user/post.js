import Ember from 'ember';
var get = Ember.get;
import ApplicationAdapter from '../application';

export default ApplicationAdapter.extend({

  findQuery: function (store, type, query) {
    var record = type.store.buildRecord(type, null, query);
    var filteredQuery = this._removeModelFieldsFromQuery(type, query);
    var url = this.buildURL(type.typeKey, null, record);

    return this.ajax(url, 'GET', { data: filteredQuery });
  },

  _removeModelFieldsFromQuery: function (type, query) {
    var filteredQuery = {};
    var fields = Ember.get(type, 'fields');

    for (var prop in query) {
      if (query.hasOwnProperty(prop) && !fields.has(prop)) {
        filteredQuery[prop] = query[prop];
      }
    }

    return filteredQuery;
  },

  pathForType: function () {
    return "users/:userId/posts";
  },

  buildURL: function(type, id, record) {
    var url = [],
        host = get(this, 'host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }

    //We might get passed in an array of ids from findMany
    //in which case we don't want to modify the url, as the
    //ids will be passed in through a query param
    if (id && !Ember.isArray(id)) { url.push(encodeURIComponent(id)); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    if (record) {
      url = url.replace(/\:userId/, record.get('userId'));
    }

    return url;
  }
});
