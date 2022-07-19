/**
 * @description DtableUi统一封装组件
 * **/

import * as React from 'react'
import { Table, TableProps } from 'antd'
import './tableUi.less'

interface TableUiProps extends TableProps<any> {

}
export const TableUi: React.FC<TableUiProps> = (props: TableUiProps) => {
  return (
    <Table
      className="table_ui"
      {...props}
    />
  )
}