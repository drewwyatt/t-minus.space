import * as React from 'react';

import { FetchStatus, Launch, ReduxState } from 'models';

import { LaunchActions } from 'actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props {
    launchStatus: FetchStatus;
    launches: Launch[];
    getLaunches(): void;
}

class LaunchListing extends React.Component<Props, void> {
    render(): JSX.Element {
        const { launchStatus } = this.props;
        return (
            <div>
                <h1>Launch Listing</h1>
                
                <Link to="/launch">Detail</Link>
                |
                <button onClick={() => this.props.getLaunches()}>Get Launches</button>

                <p>
                    <strong>Launch Status:</strong> {FetchStatus[launchStatus]}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxState) =>({
    launchStatus: state.launches.fetchStatus,
    launches: state.launches.launches,
});

const mapDispatchToProps = dispatch => ({
    getLaunches: () => dispatch(LaunchActions.getLaunches())
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchListing);