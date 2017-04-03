import * as createLogger from 'redux-logger';

import { Store, applyMiddleware, createStore } from 'redux';

import RootReducer from 'reducers';

const configureStore = (preloadedState: any = {}): Store<any> => {
    const enhancers = [
        (createLogger as any)()
    ];

    const middleware = applyMiddleware(...enhancers);
    const store = createStore(RootReducer, preloadedState, middleware);

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

