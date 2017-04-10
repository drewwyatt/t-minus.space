import * as React from 'react';

import { ConnectedRouter } from 'react-router-redux'
import { History } from 'history';
import LaunchDetail from './launch-detail';
import LaunchListing from './launch-listing';
import { Route } from 'react-router-dom';

const Root = ({ history }: { history: History }) => (
    <ConnectedRouter history={history}>
        <div>
            <Route exact path="/" component={LaunchListing} />
            <Route path="/launch" component={LaunchDetail} />
        </div>
    </ConnectedRouter>
);

export default Root;