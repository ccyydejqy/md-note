import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appActions } from 'reduxConfig/actions';
import { StoreState } from 'reduxConfig/reducers';
import { appState } from 'reduxConfig/reducers/app';

console.log('执行组件外部分');
let effectTimer;
let timer;
let publicState = 'publicState'; // sub组件外部申明的变量
export const Sub = (props) => {
    const dispatch = useDispatch()
    const { basePorp, setBasePorp } = props; // 父组件传进来的属性
    const { appProps } = useSelector<StoreState, appState>((state) => state.app);
    const { storeProp } = appProps; // redux中拿的状态
    const [subState, setSubState] = useState('subState'); // sub组件内部的状态
    let subVar = 'subVar'; // sub组件内部声明的变量
    console.log('--------执行组件函数部分------------')
    console.log(publicState, 'publicState')
    console.log(subVar, 'subVar')
    console.log(subState, 'subState')
    console.log(storeProp, 'storeProp')
    console.log(basePorp, 'basePorp')
    console.log('--------执行组件函数部分------------')
    const openTimer = () => {
        clearInterval(timer)
        timer = setInterval(() => {
            console.log('--------组件函数部分的定时器------------')
            console.log(publicState, 'publicState')
            console.log(subVar, 'subVar')
            console.log(subState, 'subState')
            console.log(storeProp, 'storeProp')
            console.log(basePorp, 'basePorp')
            console.log('--------组件函数部分的定时器------------')
        }, 5000);
    }
    const openEffectTimer = () => {
        clearInterval(effectTimer)
        effectTimer = setInterval(() => {
            console.log('--------副作用中的定时器------------')
            console.log(publicState, 'publicState')
            console.log(subVar, 'subVar')
            console.log(subState, 'subState')
            console.log(storeProp, 'storeProp')
            console.log(basePorp, 'basePorp')
            console.log('--------副作用中的定时器------------')
        }, 5000);
    }
    openTimer();
    useEffect(() => {
        console.log('执行副作用')
        console.log('--------执行副作用------------')
        console.log(publicState, 'publicState')
        console.log(subVar, 'subVar')
        console.log(subState, 'subState')
        console.log(storeProp, 'storeProp')
        console.log(basePorp, 'basePorp')
        console.log('--------执行副作用------------')
        openEffectTimer();
        return () => {
            clearInterval(timer);
            clearInterval(effectTimer);
        }
    })
    return (
        <div>
            <div>
                <Button onClick={(e) => {
                    publicState = `publicState_${e.timeStamp}`;
                }}>
                    {`sub组件外部申明的变量:${publicState}`}
                </Button>
            </div>
            <div>
                <Button onClick={(e) => {
                    subVar = `subVar${e.timeStamp}`;
                }}>
                    {`sub组件内部声明的变量:${subVar}`}
                </Button>
            </div>
            <div>
                <Button onClick={(e) => {
                    setSubState(`subState_${e.timeStamp}`);
                }}>
                    sub组件内部的状态:{subState}
                </Button>
            </div>
            <div>
                <Button onClick={(e) => {
                    appActions.updateProps({
                        storeProp: `storeProp_${e.timeStamp}`
                    }, dispatch)
                }}>
                    redux中拿的状态:{storeProp}
                </Button>
            </div>
            <div>
                <Button onClick={(e) => {
                    setBasePorp(`basePorp_${e.timeStamp}`);
                }}>
                    父组件传进来的属性:{basePorp}
                </Button>
            </div>
            {/*  */}
        </div>
    )
}