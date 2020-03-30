import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer';
import CurrentUserReducer from './containers/Auth/reducer';
import ImagePreviewReducer from './containers/ProfileEditContainer/reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer,
  image_preview: ImagePreviewReducer
});

export default rootReducer;
