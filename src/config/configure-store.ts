import { Store, applyMiddleware, combineReducers, createStore } from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux'

import { History } from 'history';
import { createLogger } from 'redux-logger';
import reducers from 'reducers';

const configureStore = (history: History, preloadedState: any = {}): Store<any> => {
    const enhancers = [
        createLogger(),
    ];

    const middleware = applyMiddleware(...enhancers, routerMiddleware(history));
    const store = createStore(combineReducers({...reducers, routing }), preloadedState, middleware);

    if ((module as any).hot) {
        // Enable Webpack hot module replacement for reducers
        (module as any).hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;

