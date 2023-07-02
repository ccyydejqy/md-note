/**
 * FormItem组件
 */
import React, { useEffect } from 'react';
import { Form } from "antd";
import './commonFormItem.less';
export interface CommonFormItemProps {
    form: any;
    children: any;
    name: string;
    key: string;
    label: string;
}
/**
 * 封装公共FormItem逻辑
 * @param props 
 * @returns 
 */
export const CommonFormItem = (props: CommonFormItemProps) => {
    const { form, children, name, key, label } = props; // props透传了原生antd的Form.Item的props
    useEffect(() => {
        console.log('FormItem公共逻辑中获取表单项', name, '的值为:', form?.getFieldValue(name))
    }, [])
    return (
        <div className='common_form_item'>
            <Form.Item     
                {...props}
                key={key}
                label={label}
                name={name}
            >
                {children}
            </Form.Item>
        </div >
    )
}