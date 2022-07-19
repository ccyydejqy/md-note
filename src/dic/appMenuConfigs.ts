import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>['items'][number];
export const enum MenuDic {
    basicFe = 'basicFe',
    standardizedComponents = 'standardizedComponents',
}
export const enum MenuSubDic {
    stateUpdate = 'stateUpdate',
    commonTable = 'commonTable',
    commonList = 'commonList',
}
export const AppMenuConfigs: MenuItem[] = [
    {
        label: '前端基础知识',
        key: MenuDic.basicFe,
        children: [
            {
                label: 'react状态更新机制',
                key: MenuSubDic.stateUpdate,
            }
        ]
    },
    {
        label: '标准化组件',
        key: MenuDic.standardizedComponents,
        children: [
            {
                label: '表格',
                key: MenuSubDic.commonTable,
            },
            {
                label: '列表',
                key: MenuSubDic.commonList,
            },
        ]
    },
]