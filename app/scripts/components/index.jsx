var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//header
var Header = React.createClass({
  render: function(){
    return(
      <div>
        <header id="header" className="header" name="header">
          <button type="button" className="btn btn-default btn-lg nav-button">
            <span className="glyphicon glyphicon-align-justify hamburger" name="hamburger" aria-hidden="true"></span>
          </button>
          <div className="app-name">Chatty Kathy</div>
        </header>
      </div>
    )
  }
});

//Input form for writing a message and submit button
var ChatInput = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.props.collection);
    this.props.collection.each(function(message){
      console.log(message.get('content'));
    })

  var ChatMessage= {"content":$(".form-control").val(),"time": Date.now()};
  this.props.collection.create(ChatMessage);

  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea className="form-control" name="context" rows="3"></textarea>
          <input className="btn btn-default submit-button" name="submit" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
});


//Rendering of messages
var ChatForm = React.createClass({
  render: function(){
    return (
      <div>
        <div className ="chat-view"></div>
      </div>
    );
  }
});


//App as a whole
var ChatApp = React.createClass({
  render: function(){
    return (
      <div>
        <ChatForm/>
        <ChatInput collection={this.props.collection}/>
      </div>
    )
  }
});

module.exports = {
  'Header': Header,
  'ChatApp': ChatApp
};
