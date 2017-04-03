import { AppAction, AppActions, OtherAction } from 'actions';

const { REQUEST_LOADING_INDICATOR, DISMISS_LOADING_INDICATOR } = AppActions.Type;

export interface AppState {
    loadingRequests: Symbol[];
}

const DEFAULT_STATE: AppState = {
    loadingRequests: [],
};

export const appReducer = (state: AppState = DEFAULT_STATE, action: AppAction | OtherAction): AppState => {
    switch (action.type) {
        case REQUEST_LOADING_INDICATOR:
            return Object.assign({}, state, {
                loadingRequests: [
                    ...state.loadingRequests,
                    action.payload.key
                ]
            });
        case DISMISS_LOADING_INDICATOR:
            const loadingIdx = state.loadingRequests.indexOf(action.payload.key);
            return Object.assign({}, state, {
                loadingRequests: [
                    ...state.loadingRequests.slice(0, loadingIdx),
                    ...state.loadingRequests.slice(loadingIdx + 1)
                ]
            });
        default:
            return state;
    }
};

