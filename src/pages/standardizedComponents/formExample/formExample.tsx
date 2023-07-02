import { Button, Empty, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import './formExample.less'
import { CommonForm } from "components";
import { StandardizedComponentsService } from "services";
export const FormExample = () => {
    const [formConfig, setFormConfig] = useState<any>()
    const [formBackfill, setFormBackfill] = useState<any>()
    const [form] = Form.useForm();
    const [mode, setMode] = useState('edit');
    useEffect(() => {
        /** 请求表单项配置 */
        StandardizedComponentsService.getCommonFormConfig({}).then((res: any) => {
            console.log(res, 'setFormConfig')
            setFormConfig(res);
        }).finally(() => {

        })
    }, [])
    useEffect(() => {
        if(mode === 'edit') return
        /** 请求表单项回填值，保持表单后查看使用 */
        StandardizedComponentsService.getCommonFormBackfill({}).then((res: any) => {
            console.log(res, 'setFormBackfill')
            setFormBackfill(res);
        }).finally(() => {

        })
    }, [mode])
    const onFormFinish = (values) => {
        setMode('view')
    }
    return (
        <div className="form_example">
            <div className="form_example_title">
                通用表单示例
            </div>
            <div className="form_example_content">
                {formConfig && <CommonForm
                    formConfig={formConfig}
                    formBackfill={formBackfill}
                    form={form}
                    onFormFinish={onFormFinish} />}
                <Button onClick={() => {
                    form.submit();
                }}>
                    submit
                </Button>
            </div>
        </div>
    )
}