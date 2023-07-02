/**
 * SelectControl基础控件
 */
import React, { useEffect } from 'react';
import { Select } from "antd";
import { CommonFormItem, CommonFormItemProps } from '../commonFormItem';
import { BasicControlFactoryProps } from '.';
interface SelectControlProps extends BasicControlFactoryProps, CommonFormItemProps {
}

export const SelectControl = (props: SelectControlProps) => {
    const { formBackfill, name, form } = props;
    useEffect(() => {
        /** 具体表单项处理回填值 */
        if (!formBackfill || !name) return
        if (formBackfill?.[name]) {
            form?.setFieldValue(name, formBackfill?.[name])
        }
    }, [formBackfill, name])
    return (
        <div className='select_control_wrap'>
            <CommonFormItem
                {...props}
            >
                <Select
                    options={[
                        {
                            value: '1',
                            label: '1111'
                        },
                        {
                            value: '2',
                            label: '2222'
                        },
                    ]}
                    onChange={(val) => {
                        form?.setFieldValue('input_item', val)
                    }}
                />
            </CommonFormItem>
        </div>
    )
}