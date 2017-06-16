import { connect } from 'react-redux';
import Quote from './quote';
import { updateQuote } from '../../actions/quote_actions';
const mapStateToProps = (state, ownProps) => ({
  quote: state.quote
});

const mapDispatchToProps = dispatch => ({
  updateQuote: (quote) => dispatch(updateQuote(quote))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
