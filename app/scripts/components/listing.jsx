var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var moment = require('moment');
require('backbone-react-component');


var ChatList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  componentDidMount: function(){
    this.props.collection.fetch();
  },
    render: function(){
      var messages = this.props.collection.map(function(model){
        return (
          <MessageComponent
             key = {model.get('_id') + Math.random()}
             message = {model}
          />
        )
      });
      return (
        <div>
          <div className ='row chat-view'>
            <div className ='chat-box'>{messages}</div>
          </div>
        </div>
      );
    }
});

var MessageComponent = React.createClass({
  render: function(){
    return (
      <div>
        <span>{this.props.message.get("content")}</span>
      </div>
    );
  }
});

module.exports = ChatList
