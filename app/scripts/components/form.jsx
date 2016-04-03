var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

var ChatForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(){
    var postChat = $('.context').val();
    this.props.collection.create({
      chat: postChat
    });

  },
  render: function(){
    return(
      <div>
        <div>
          <header id="header" className="header" name="header">
            <button type="button" className="btn btn-default btn-lg nav-button">
              <span className="glyphicon glyphicon-align-justify hamburger" name="hamburger" aria-hidden="true"></span>
            </button>
            <div className="app-name">Chatty Kathy</div>
          </header>
        </div>
        <form>
          <textarea type="text" className="form-control context" rows="3" placeholder="New Message"/>
        </form>
        <button onClick={this.handleSubmit} className="btn btn-default submit-button" type="button">Submit</button>
      </div>
    );
  }
});


module.exports = ChatForm
