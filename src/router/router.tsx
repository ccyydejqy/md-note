import * as React from "react";
import { Redirect } from "react-router-dom";
import { RouteConfig } from "react-router-config";
import { AppFrame } from "pages/appFrame/appFrame";
import { MenuDic, MenuSubDic } from "dic";
export const Config: RouteConfig[] = [
  {
    path: "/",
    component: AppFrame,
    routes: [
      {
        path: "/",
        exact: true,
        component: () => <Redirect to={`/${MenuDic.basicFe}`}></Redirect>,
      },
      {
        path: `/${MenuDic.basicFe}`,
        component: React.lazy(() =>
          import("pages/basicFe").then(
            ({ BasicFePage }) => ({
              default: BasicFePage
            })
          )
        ),
        routes: [
          {
            path: `/${MenuDic.basicFe}`,
            exact: true,
            component: () => <Redirect to={`/${MenuDic.basicFe}/${MenuSubDic.stateUpdate}`}></Redirect>,
          },
          {
            path: `/${MenuDic.basicFe}/${MenuSubDic.stateUpdate}`,
            id: MenuSubDic.stateUpdate,
            component: React.lazy(() =>
              import("pages/basicFe").then(
                ({ StateExample }) => ({
                  default: StateExample
                })
              )
            ),
          },
        ]
      },
      {
        path: `/${MenuDic.standardizedComponents}`,
        component: React.lazy(() =>
          import("pages/standardizedComponents").then(
            ({ StandardizedComponentsPage }) => ({
              default: StandardizedComponentsPage
            })
          )
        ),
        routes: [
          {
            path: `/${MenuDic.standardizedComponents}`,
            exact: true,
            component: () => <Redirect to={`/${MenuDic.standardizedComponents}/${MenuSubDic.commonTable}`}></Redirect>,
          },
          {
            path: `/${MenuDic.standardizedComponents}/${MenuSubDic.commonTable}`,
            id: MenuSubDic.commonTable,
            component: React.lazy(() =>
              import("pages/standardizedComponents").then(
                ({ TableExample }) => ({
                  default: TableExample
                })
              )
            ),
          },
          {
            path: `/${MenuDic.standardizedComponents}/${MenuSubDic.commonList}`,
            id: MenuSubDic.commonList,
            component: React.lazy(() =>
              import("pages/standardizedComponents").then(
                ({ ListExample }) => ({
                  default: ListExample
                })
              )
            ),
          },
          {
            path: `/${MenuDic.standardizedComponents}/${MenuSubDic.commonForm}`,
            id: MenuSubDic.commonForm,
            component: React.lazy(() =>
              import("pages/standardizedComponents").then(
                ({ FormExample }) => ({
                  default: FormExample
                })
              )
            ),
          },
        ]
      },
    ]
  },
]