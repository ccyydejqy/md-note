/**
 * @description PaginationUi统一封装组件
 * **/

import * as React from 'react'
import { Pagination, PaginationProps } from 'antd'
import './paginationUi.less'
export interface PaginationParmasType {
  current?: number;
  pageSize?: number;
}
interface PaginationUiProps extends PaginationProps {

}
export const PaginationUi: React.FC<PaginationUiProps> = (props: PaginationUiProps) => {
  return (
    <Pagination />
  )
}