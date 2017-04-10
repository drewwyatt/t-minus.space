import { FetchStatus, Launch } from 'models';
import { LaunchAction, LaunchActions, OtherAction } from 'actions';

const { GET_LAUNCHES, LOAD_LAUNCHES } = LaunchActions.Type;

export interface LaunchesState {
    fetchStatus: FetchStatus;
    launches: Launch[];
}

const DEFAULT_STATE: LaunchesState = {
    fetchStatus: FetchStatus.NOT_FETCHED,
    launches: [],
};

export const launchesReducer = (state: LaunchesState = DEFAULT_STATE, action: LaunchAction | OtherAction): LaunchesState => {
    switch (action.type) {
        case GET_LAUNCHES:
            return Object.assign({}, state, { fetchStatus: FetchStatus.FETCHING });
        case LOAD_LAUNCHES:
            return Object.assign({}, state, {
                fetchStatus: FetchStatus.SUCCESS,
                launches: action.payload,
            });
        default:
            return state;
    }
};

