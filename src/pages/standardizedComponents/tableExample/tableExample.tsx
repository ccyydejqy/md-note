import { Empty } from "antd";
import { CommonTable } from "components";
import React, { useEffect, useState } from "react";
import { StandardizedComponentsService } from "services";
import './tableExample.less'
export const TableExample = () => {
    const [paginationParmas, setPaginationParmas] = useState({ current: 1, pageSize: 10 })
    const [total, setTotal] = useState(0)
    const [tableData, setTableData] = useState([])
    const [tableLoading, setTableLoading] = useState(false)
    useEffect(() => {
        setTableLoading(true)
        StandardizedComponentsService.getCommonTable({}).then((res: any) => {
            const { list, total } = res;
            setTableData(list);
            setTotal(total);
        }).finally(() => {
            setTableLoading(false)
        })
    }, [paginationParmas])
    const columns: any = [
        {
            key: 'idx',
            title: '索引',
            dataIndex: 'idx',
            width: 200,
            fixed: 'left'
        },
        {
            key: 'name',
            title: '名称名称名称名称名称名称名称名称名称名称名称名称名称名称',
            dataIndex: 'name',
            width: 500
        },
        {
            key: 'fix',
            title: 'fixfixfixfixfixfixfixfixfix',
            dataIndex: 'fix',
            fixed: 'right',
            width: 500
        },
    ]
    return (
        <div className="table_example">
            <div className="table_example_title">
                通用表格示例
            </div>
            <CommonTable
                loading={tableLoading}
                columns={columns}
                dataSource={tableData}
                paginationParmas={paginationParmas}
                total={total}
                onPaginationChange={() => { }}
                onTableChange={() => { }}
                rowKey={(record) => {
                    return record?.idx
                }}
            />
        </div>
    )
}