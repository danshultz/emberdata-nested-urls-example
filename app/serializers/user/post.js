import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({

  typeForRoot: function (key) {
    var val = this._super(key);
    if (val === 'post') {
      val = 'user/post';
    }
    return val;
  }

});
