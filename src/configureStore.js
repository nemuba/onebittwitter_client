import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

// Routes imports
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
const history_middleware = routerMiddleware(history);
// End routes imports

export default function configureStore(preloadedState) {

  // Config extension REDUX DevTools
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducers(history),
    preloadedState,
    composeEnhancer(applyMiddleware(history_middleware, thunk))
  );

  return store;
}
