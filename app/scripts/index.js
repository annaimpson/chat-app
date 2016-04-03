var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var models = require('./models/messages.js');
var ChatForm = require('./components/form.jsx');
var ChatListing = require('./components/listing.jsx');
// var Header = chatInfo.Header;
// var ChatForm = chatInfo.ChatForm;
// var ChatInput = chatInfo.ChatInput;
// var ChatApp = chatInfo.ChatApp;

var appCollection = new models.ChatCollection();

appCollection.fetch();
  ReactDOM.render(
    React.createElement(ChatListing, {collection: appCollection}),
    document.getElementById('container')
  );

ReactDOM.render(
  React.createElement(ChatForm, {collection: appCollection}),
  document.getElementById('header')
);
