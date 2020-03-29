import { UPDATE_TRENDINGS } from './constants';

//* @var initialState = []
const initialState = {
  hashtags: []
};

//* @reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TRENDINGS:
      return { ...state, hashtags: action.payload.hashtags }
      default:
        return state;
  }
}