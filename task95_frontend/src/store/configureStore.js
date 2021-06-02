import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import cocktailsReducer from './reducers/cocktailsReducer';
import usersReducer from './reducers/usersReducer';
import { rootSaga } from './sagas/index';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  cockatils: cocktailsReducer,
  router: connectRouter(history)
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      user: store.getState().users.user
    }
  });
});

export default store;