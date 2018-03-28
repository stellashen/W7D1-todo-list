import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const configureStore = (preloadedState= {} ) => {
  const store = createStore(rootReducer, preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

export default configureStore;
