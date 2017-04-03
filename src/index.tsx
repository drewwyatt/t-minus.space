import * as React from 'react';

import { AppContainer } from 'react-hot-loader';
import Root from 'containers/root';
import { render } from 'react-dom';

// import { configureStore } from 'config';

const elem = document.getElementById('app');
render(<AppContainer><Root /></AppContainer>, elem);

if ((module as any).hot) {
	(module as any).hot.accept('./containers/root', () => {
		const RootContainer = require('./containers/root').default;
		render(
			<AppContainer>
				<RootContainer />
			</AppContainer>,
			elem
		);
	});
}

