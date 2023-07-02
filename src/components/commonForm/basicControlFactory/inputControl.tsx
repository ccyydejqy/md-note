/**
 * InputControl基础控件
 */
import React, { useEffect, useState } from 'react';
import { Input } from "antd";
import { CommonFormItem, CommonFormItemProps } from '../commonFormItem';
import { BasicControlFactoryProps } from '.';
interface InputControlProps extends BasicControlFactoryProps, CommonFormItemProps {
}

export const InputControl = (props: InputControlProps) => {
    const { formBackfill, name, form } = props;
    const normalize = (value, prevValue, prevValues) => {
        console.log(value, prevValue, prevValues, 'normalize')
        return value
    }
    useEffect(() => {
        /** 具体表单项处理回填值 */
        if (!formBackfill || !name) return
        if (formBackfill?.[name]) {
            form?.setFieldValue(name, formBackfill?.[name])
        }
    }, [formBackfill, name])
    return (
        <div className='input_control_wrap'>
            {/* 对CommonFormItem的一些特殊处理，可以用props透传; 例如normalize */}
            <CommonFormItem
                {...props}
                {...{ normalize: normalize }}
            >
                <Input />
            </CommonFormItem>
        </div >
    )
}