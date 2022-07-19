import { combineReducers } from "redux"
import { app_UPDATE_PROPS } from 'reduxConfig/actions';
export interface appState {
    appProps: {
        appLoading: boolean;
        storeProp: string;
    };
}

export const app = combineReducers<appState>({
    appProps: (
        state = {
            appLoading: false,
            storeProp: 'storeProp'
        },
        { payload, type },
    ) => {
        if (type === app_UPDATE_PROPS) {
            return { ...state, ...payload };
        }
        return state;
    }
})