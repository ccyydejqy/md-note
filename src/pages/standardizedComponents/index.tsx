import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';



interface StandardizedComponentsPageProps extends RouteConfigComponentProps { }
export const StandardizedComponentsPage = (props: StandardizedComponentsPageProps) => {
    const { route } = props;
    return (
        <div style={{height: '100%'}}>
            {route && renderRoutes(route.routes)}
        </div>
    )
}
export * from './listExample/listExample'
export * from './tableExample/tableExample'