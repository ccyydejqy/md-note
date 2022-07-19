import { useDispatch } from "react-redux";


export const app_UPDATE_PROPS = Symbol('app_UPDATE_PROPS');

export const appActions = {
    updateProps: (payload: any, dispatch: any) => { // 原先用了比较复杂的中间件封装方式，为什么不用这种？
        return dispatch({ // 原生dispatch
            type: app_UPDATE_PROPS,
            payload
        })
    }
}