import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer';
import CurrentUserReducer from './containers/Auth/reducer';
import ImagePreviewReducer from './containers/ProfileEditContainer/reducer';
import UserInfoReducer from './containers/UserInfoContainer/reducer';
import TweetListReducer from './containers/TweetListContainer/reducer.js';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer,
  image_preview: ImagePreviewReducer,
  user: UserInfoReducer,
  tweets: TweetListReducer
});

export default rootReducer;
