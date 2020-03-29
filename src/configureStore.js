import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

// Routes imports
import {createBrowserHistory} from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const history_middleware = routerMiddleware(history);
// End routes imports



export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducers(history), preloadedState, compose( applyMiddleware(history_middleware, thunk) )
  )

  return store;
}
