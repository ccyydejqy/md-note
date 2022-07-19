/**
 * 所以Table的业务组件
 */
import { TableProps } from 'antd';
import { PaginationParmasType, PaginationUi, TableUi } from 'common/ui';
import React from 'react';
import './commonTable.less';
interface CommonTableProps extends TableProps<any> {
    paginationParmas: PaginationParmasType;
    total: number;
    onPaginationChange: any;
    onTableChange?: any;
}

export const CommonTable = (props: CommonTableProps) => {
    const { loading, total, paginationParmas, onPaginationChange, onTableChange } = props;
    return (
        <div className='common_table'>
            <div className='d_table_ui_layout'>
                <div className='d_table_ui_wrap'>
                    <TableUi
                        size={'middle'}
                        scroll={{ x: 10, y: '100%' }}
                        {...props}
                        onChange={onTableChange}
                        pagination={false}
                    ></TableUi>
                </div>
            </div>
            <div className='d_pagination_ui_layout'>
                {!loading && <div className='d_pagination_ui_wrap'>
                    <PaginationUi
                        showSizeChanger={false}
                        current={paginationParmas?.current}
                        pageSize={paginationParmas?.pageSize}
                        total={total}
                        onChange={onPaginationChange}
                    ></PaginationUi>
                </div>}
            </div>
        </div >
    )
}