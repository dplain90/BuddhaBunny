import { RECEIVE_QUOTE } from '../actions/quote_actions';

const _defaultQuote = Object.freeze({ content: "Happy Father's Day!", author: "Love, Danny" });

const QuoteReducer = (state = _defaultQuote, action) => {
  switch(action.type) {
    case RECEIVE_QUOTE:
      return action.quote;
    default:
      return state;
  }
};

export default QuoteReducer;
