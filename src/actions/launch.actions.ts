import { Launch, Listing } from 'models';

import { Action } from 'redux';

interface LaunchListing extends Listing {
    launches: Launch[];
}

export type LaunchAction = 
    LaunchActions.GetLaunchesAction |
    LaunchActions.LoadLaunchesAction;

export namespace LaunchActions {
    export const Type = {
        GET_LAUNCHES: 'LAUNCH/GET_LAUNCHES' as 'LAUNCH/GET_LAUNCHES',
        LOAD_LAUNCHES: 'LAUNCH/LOAD_LAUNCHES' as 'LAUNCH/LOAD_LAUNCHES',
    };

    /******/

    export interface GetLaunchesAction extends Action {
        type: 'LAUNCH/GET_LAUNCHES';
    }

    export const getLaunches = (): GetLaunchesAction => ({ type: Type.GET_LAUNCHES }); 

    /******/

    export interface LoadLaunchesAction extends Action {
        type: 'LAUNCH/LOAD_LAUNCHES';
        payload: LaunchListing;
    }

    export const loadLaunches = (payload: LaunchListing): LoadLaunchesAction => ({ type: Type.LOAD_LAUNCHES, payload });
}