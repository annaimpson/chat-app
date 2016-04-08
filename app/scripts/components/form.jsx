var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

var ChatForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
    e.preventDefault();
    var postChat = $('.context').val();
    console.log('props collection', this.props.collection);
    this.props.collection.create({
      'content': postChat
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
