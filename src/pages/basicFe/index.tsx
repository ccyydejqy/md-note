import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

interface BasicFePageProps extends RouteConfigComponentProps { }
export const BasicFePage = (props: BasicFePageProps) => {
    const { route } = props;
    return (
        <div style={{ height: '100%' }}>
            {route && renderRoutes(route.routes)}
        </div>
    )
}
export * from './stateExample/stateExample'