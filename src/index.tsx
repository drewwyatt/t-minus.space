import * as React from 'react';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import Root from 'containers/root';
import { configureStore } from 'config';
import createHistory from 'history/createBrowserHistory'
import { render } from 'react-dom';

const elem = document.getElementById('app');
const history = createHistory();
const store = configureStore(history);

render(<AppContainer><Provider store={store}><Root history={history} /></Provider></AppContainer>, elem);

if ((module as any).hot) {
	(module as any).hot.accept('./containers/root', () => {
		const RootContainer = require('./containers/root').default;
		render(
			<AppContainer>
                <Provider store={store}>
				    <RootContainer history={history} />
                </Provider>
			</AppContainer>,
			elem
		);
	});
}

