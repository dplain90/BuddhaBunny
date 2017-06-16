import { updateQuote } from '../../actions/quote_actions';
import React from 'react';
import { connect } from 'react-redux';
class Quote extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateQuote();
  }
  render(){
    let { author, content } = this.props.quote;

    return (
      <div className="quote-container">
        <div className="bunny-container" onClick={this.handleClick}>
          <h1 onClick={this.handleClick}>Buddha Bunny</h1>
          <img src="./images/bunny.png" onClick={this.handleClick} />
        </div>
        <div className="quote">
          <div className="quote-content"> {content} </div> -
          <div className="quote-author"> {author} </div>
        </div>


      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  quote: state.quote
});

const mapDispatchToProps = dispatch => ({
  updateQuote: () => dispatch(updateQuote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
