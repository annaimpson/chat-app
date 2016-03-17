var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/messages.js');
var chatInfo = require('./components/index.jsx');
var Header = chatInfo.Header;
var ChatForm = chatInfo.ChatForm;
var ChatInput = chatInfo.ChatInput;
var ChatApp = chatInfo.ChatApp;

var appCollection = new models.ChatCollection();
  appCollection.fetch();
  console.log(appCollection);


ReactDOM.render(
  React.createElement(Header),
  document.getElementById('header')
);


ReactDOM.render(
  React.createElement(ChatApp, {collection: appCollection}),
  // <ChatApp collection={appCollection}/>,
  document.getElementById('container')
);
