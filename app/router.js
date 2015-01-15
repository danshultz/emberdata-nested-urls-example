import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("users", function() {
    this.resource("users.show", { path: ':id' }, function () {
      this.resource("users.posts", { path: "posts" }, function () {
        this.route('edit');
      });
    });
  });
  this.resource("posts");
});

export default Router;
