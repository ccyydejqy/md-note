/**
 * @description Page公共组件
 * **/

import './page.less'
import * as _ from 'lodash'
import * as React from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { useSelector } from 'react-redux'
export interface PageProps extends RouteConfigComponentProps {
    name?: string;
    footer?: any;
    className?: string;
    fixHeight?: boolean; // 是否要contianer占据视口
    onScroll?: any;
    pageTitle?: string;
    onTouchStart?: any;
    onTouchEnd?: any;
}

export const Page: React.FC<PageProps> = (props: any) => {
    const { route, children, footer, className, pageTitle, fixHeight, onScroll, onTouchStart, onTouchEnd } = props

    if (!route) return null
    const getRenderPage = () => {
        return children
    }
    return <>
        <header className="app-header">
            <span className="app-header-title" >{pageTitle || route?.pageTitle || ''}</span>
        </header>
        <div className={`app-page-contianer ${className || ''} ${fixHeight ? 'fixHeight' : ''}`} onScroll={onScroll} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {getRenderPage()}
        </div>
        {
            footer && <footer className="app_page_footer">
                {
                    footer
                }
            </footer>
        }
    </>

}