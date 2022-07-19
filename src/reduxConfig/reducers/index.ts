import { app, appState } from './app'
import { combineReducers } from 'redux';

export interface StoreState { // 定义储存多个reducer的接口
  app: appState;
}

export const reducers = combineReducers<StoreState>({
  app,
});// 应该是储存多个reduer的地方