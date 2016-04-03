var $ = require('jquery');
var Backbone = require('backbone');

var ChatModel = Backbone.Model.extend({
});

var ChatCollection = Backbone.Collection.extend({
  model: ChatModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
  parse: function(data){
    return data;
  }
});

module.exports = {
  ChatModel: ChatModel,
  ChatCollection: ChatCollection
};
