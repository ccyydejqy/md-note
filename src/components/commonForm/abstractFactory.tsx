/**
 * 表单项抽象工厂
 * 1. 支持基础控件
 * 2. 支持复杂组件（todo）
 */
import React from "react";
import { BasicControlFactory } from "./basicControlFactory";
import { FormConfigItemType } from "./commonForm";
interface AbstractFactoryProps {
    formConfigItems: Array<FormConfigItemType>;
    formBackfill: any;
    form: any;
}
export const AbstractFactory = (props: AbstractFactoryProps) => {
    const {formConfigItems, formBackfill, form} = props;
    return <div className="abstract_factory">
        {formConfigItems?.map((formConfigItem: any) => {
            return <AbstractFactoryItem formConfigItem={formConfigItem} formBackfill={formBackfill} form={form} />
        })}
    </div>
}

export interface AbstractFactoryItemProps {
    formConfigItem: FormConfigItemType, // 表单项配置
    formBackfill: any; // 表单项回填值，由于每一个表单项对回填值处理不一致。回填值由具体表单项封装处理
    form: any;
}
export const AbstractFactoryItem = (props: AbstractFactoryItemProps) => {
    return (
        <div className="abstract_factory_item">
            <BasicControlFactory {...props} />
        </div>
    )
}