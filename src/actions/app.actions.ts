import { Action } from 'redux';

export type AppAction = 
    AppActions.RequestLoadingIndicatorAction |
    AppActions.DismissLoadingIndicatorAction;

export namespace AppActions {
    export const Type = {
        REQUEST_LOADING_INDICATOR: 'APP/REQUEST_LOADING_INDICATOR' as 'APP/REQUEST_LOADING_INDICATOR',
        DISMISS_LOADING_INDICATOR: 'APP/DISMISS_LOADING_INDICATOR' as 'APP/DISMISS_LOADING_INDICATOR',
    };

    /******/

    export interface RequestLoadingIndicatorAction extends Action {
        type: 'APP/REQUEST_LOADING_INDICATOR';
        payload: {
            key: Symbol;
        };
    }

    export const requestLoadingIndicator = (key: Symbol): RequestLoadingIndicatorAction => 
        ({ type: Type.REQUEST_LOADING_INDICATOR, payload: { key } });

    /******/

    export interface DismissLoadingIndicatorAction extends Action {
        type: 'APP/DISMISS_LOADING_INDICATOR';
        payload: {
            key: Symbol;
        };
    }

    export const dismissLoadingIndicator = (key: Symbol): DismissLoadingIndicatorAction => 
        ({ type: Type.DISMISS_LOADING_INDICATOR, payload: { key } });
}