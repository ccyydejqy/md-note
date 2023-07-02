/**
 * 通用Form组件
 * 1. 支持配置化表单项
 * 2. 支持表单项回填，并且在表单项中独立处理
 * 3. 支持多表单项隔离联动
 */
import React from 'react';
import { Button, Form } from "antd";
import './commonForm.less';
import { AbstractFactory } from './abstractFactory';
import { BasicControlDic } from './basicControlFactory';
export interface FormConfigItemType {
    key: string; // 表单项key
    name: string; // 表单项name
    label: string; // 表单项label
    type: 'basicControl' | 'component'; // 基础控件basicControl  复杂组件component
    basicType: BasicControlDic; // 基础控件的类型
    formItemProps: any; // 原生antdFormItem透传props
}
interface CommonFormProps {
    formConfig: { // 表单项配置
        formItems: Array<FormConfigItemType>
        formConfig: any;
    }
    formBackfill?: any; // 表单项回填值
    form: any;
    onFormFinish: any;
}

export const CommonForm = (props: CommonFormProps) => {
    const { formConfig, formBackfill, form, onFormFinish } = props;

    const onFieldsChange = (changedFields, allFields) => {
        console.log(changedFields, allFields, 'onFieldsChange');
    }
    const onFinish = (values) => {
        console.log(values, 'onFinish');
        onFormFinish(values);
    }
    const onFinishFailed = ({ values, errorFields, outOfDate }) => {
        console.log(values, errorFields, outOfDate, 'onFinishFailed');
    }
    const onValuesChange = (changedValues, allValues) => {
        console.log(changedValues, allValues, 'onValuesChange');
    }
    return (
        <div className='common_form'>
            <div className='d_form_ui_layout'>
                <div className='d_form_ui_wrap'>
                    <Form
                        scrollToFirstError
                        {...formConfig?.formConfig}
                        name={formConfig?.formConfig?.name}
                        form={form}
                        onFieldsChange={onFieldsChange}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        onValuesChange={onValuesChange}
                    >
                        <AbstractFactory formConfigItems={formConfig?.formItems} formBackfill={formBackfill} form={form}></AbstractFactory>  
                    </Form>
                </div>
            </div>
        </div >
    )
}