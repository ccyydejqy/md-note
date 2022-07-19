import { Menu, MenuProps } from "antd";
import { AppMenuConfigs, MenuDic, MenuSubDic } from "dic";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qs from "qs";
import SubMenu from "antd/lib/menu/SubMenu";

export const AppMenu = () => {
    const history = useHistory();
    const pathname = history.location.pathname;
    useEffect(() => {
        const pathnameArr = pathname.split('/');
        const menu: MenuDic = pathnameArr[1] as any;
        const subMenu: MenuSubDic = pathnameArr[2] as any;
        setOpenKeys([menu])
        setSelectedKeys([subMenu])
    }, [pathname])
    const [openKeys, setOpenKeys] = useState([MenuDic.basicFe]);
    const [selectedKeys, setSelectedKeys] = useState([MenuSubDic.stateUpdate]);
    const rootSubmenuKeys = [MenuDic.basicFe, MenuDic.standardizedComponents];
    const onOpenChange: MenuProps['onOpenChange'] = (keys: any) => {
        const latestOpenKey: any = keys.find((key: any) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <Menu
            className="app_sider_menu"
            mode="inline"
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            items={AppMenuConfigs}
            onOpenChange={onOpenChange}
            onSelect={({ key, keyPath }) => {
                history.push(`/${keyPath.reverse().join('/')}`)
            }}
        />
    )
}