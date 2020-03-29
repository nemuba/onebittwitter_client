import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer';
import CurrentUserReducer from './containers/Auth/reducer.js';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer
});

export default rootReducer;
