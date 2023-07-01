import React, { useEffect } from "react";
import "./appFrame.less";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { Layout } from "antd";
const { Content, Sider } = Layout;
import qs from "qs";
import { useHistory } from "react-router-dom";
import { AppMenu } from "components";

interface AppFrameProps extends RouteConfigComponentProps { }

/**
 * 页面全局框架
 */
export const AppFrame: React.FC<AppFrameProps> = (props) => {
  const { route } = props;

  return (
    <Layout className="app_layout">
      <Sider className="app_sider">
        <AppMenu />
      </Sider>
      <Content className="app_content">
        {route && renderRoutes(route.routes)}
      </Content>
      {/* {appProps?.loading && (
        <div className="global_center_container app_loading_bg">
          {' '}
          <Spin />
        </div>
      )} */}
    </Layout>
  );
};
