import { CommonList } from "components";
import React, { useEffect, useState } from "react";
import { StandardizedComponentsService } from "services";
import './listExample.less'
export const ListExample = () => {
    const [paginationParmas, setPaginationParmas] = useState({ current: 1, pageSize: 10 })
    const [total, setTotal] = useState(0)
    const [listData, setListData] = useState([])
    const [listLoading, setListLoading] = useState(false)
    useEffect(() => {
        setListLoading(true)
        StandardizedComponentsService.getCommonList({}).then((res: any) => {
            const { list, total } = res;
            setListData(list);
            setTotal(total);
        }).finally(() => {
            setListLoading(false)
        })
    }, [paginationParmas])
    return (
        <div className="list_example">
            <div className="list_example_title">
                通用列表示例
            </div>
            <CommonList
                paginationParmas={paginationParmas}
                total={total}
                onPaginationChange={() => { }}
                dataSource={listData}
                loading={listLoading}
                renderItem={(record) => {
                    return (<div className="list_item_wrap">
                        <div>
                            {record?.idx}
                        </div>
                        <div>
                            {record?.name}
                        </div>
                    </div>)
                }}
            >
            </CommonList>
        </div>

    )
}