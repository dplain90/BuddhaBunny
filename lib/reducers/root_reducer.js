import {combineReducers} from 'redux';
import QuoteReducer from './quote_reducer';

const RootReducer = combineReducers({
  quote: QuoteReducer
});

export default RootReducer;
