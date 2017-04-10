import { AppState } from 'reducers/app.reducer';
import { LaunchesState } from 'reducers/launches.reducer';

interface ReduxState {
    app: AppState;
    launches: LaunchesState;
};

export default ReduxState;