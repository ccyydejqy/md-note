/**
 * BasicControl组件
 */
import React from 'react';
import { InputControl } from './inputControl';
import { SelectControl } from './selectControl';
import { AbstractFactoryItemProps } from '../abstractFactory';


export enum BasicControlDic {
    /** 表单项基础控件，需要在此配置才能使用 */
    input = 'input',
    select = 'select',
}

const BasicControlMap = {
    [BasicControlDic.input]: InputControl,
    [BasicControlDic.select]: SelectControl
}

export interface BasicControlFactoryProps extends AbstractFactoryItemProps{

}
export const BasicControlFactory = (props: BasicControlFactoryProps) => {
    const { formConfigItem } = props;
    const BasicControl =  BasicControlMap[formConfigItem?.basicType]
    const formItemProps = formConfigItem?.formItemProps || {};
    const commonFormItemProps = {
        key: formConfigItem?.key,
        name: formConfigItem?.name,
        label: formConfigItem?.label,
    }
    return (
        <BasicControl {...props} {...formItemProps} {...commonFormItemProps}/>
    )
}
