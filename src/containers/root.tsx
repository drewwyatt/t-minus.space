import * as React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import LaunchDetail from './launch-detail';
import LaunchListing from './launch-listing';

const Root = () => (
    <Router>
        <div>
            <Route exact path="/" component={LaunchListing} />
            <Route path="/launch" component={LaunchDetail} />
        </div>
    </Router>
);

export default Root;