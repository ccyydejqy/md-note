import { ListProps } from "antd";
import { ListUi, PaginationParmasType, PaginationUi } from "common/ui";
import React from "react";
import './commonList.less';

interface CommonListProps extends ListProps<any> {
    paginationParmas?: PaginationParmasType;
    total?: number;
    onPaginationChange?: any;
}
export const CommonList = (props: CommonListProps) => {
    const { loading, total, paginationParmas, onPaginationChange } = props;
    return (
        <div className='common_list'>
            <div className='list_ui_layout'>
                <div className='list_ui_wrap'>
                    <ListUi
                        {...props}
                    ></ListUi>
                </div>
            </div>
            <div className='pagination_ui_layout'>
                {!loading && <div className='pagination_ui_wrap'>
                    <PaginationUi
                        showSizeChanger={false}
                        current={paginationParmas?.current}
                        pageSize={paginationParmas?.pageSize}
                        total={total}
                        onChange={onPaginationChange}
                    ></PaginationUi>
                </div>}
            </div>
        </div>
    )
}