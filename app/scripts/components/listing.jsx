var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var moment = require('moment');
require('backbone-react-component');


var ChatList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      content: "",
      time: moment(new Date()).fromNow(),
      chatCollection: this.props.collection
    }
  },

  fetchData: function(){
    this.props.collection.fetch();
  },

  handlePostChat: function(e){
    e.preventDefault();
    this.setState({
        content: $('.postChat').val(),
        time: moment(new Date()).fromNow()
    })
    this.props.collection.create({content: this.state.content, time: this.state.time})
  },
    render: function(){
      var messages = this.props.collection.map(function(model){
        return (
          <div>
            <div key={model.get('_id')}>
              <span>{model.get('content')}</span>
              <span>{model.get('time')}</span>
            </div>
          </div>
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

module.exports = ChatList
