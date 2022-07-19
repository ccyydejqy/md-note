/**
 * @description DlistUi统一封装组件
 * **/

import * as React from 'react'
import { List, ListProps } from 'antd'
import './listUi.less'

interface ListUiProps extends ListProps<any> {

}
export const ListUi: React.FC<ListUiProps> = (props: ListUiProps) => {
  return (
    <List
      className="list_ui"
      {...props}
    />
  )
}