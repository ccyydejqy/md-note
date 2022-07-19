import React from 'react';
import { Provider } from 'react-redux'
import { store } from 'reduxConfig/store'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Spin } from 'antd';
import { Config } from 'router/router';
import 'assets/styles';
/**
 * @description app入口
 * 
 */
export function App() {

    return <Provider store={store}>
        <React.Suspense
            fallback={
                <Spin style={{ position: 'absolute', top: '50vh', left: '50vw' }} />
            }
        >
            <HashRouter>{renderRoutes(Config)}</HashRouter>
        </React.Suspense>
    </Provider>

} 