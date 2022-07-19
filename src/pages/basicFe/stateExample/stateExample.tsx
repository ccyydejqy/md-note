import { Page } from 'components/page/page';
import React from 'react';
import { useState } from 'react';
import { Sub } from './sub';

export const StateExample = (props) => {
    const [basePorp, setBasePorp] = useState('baseProp')
    return (
        <Sub
            basePorp={basePorp}
            setBasePorp={setBasePorp}
        ></Sub>
    )
}