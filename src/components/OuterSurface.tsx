import React, { useState } from 'react'

/**
 * 接收一个组件作为参数，内部 val 的值将赋给组件使用
 */
const OuterFace = ({ print }) => {
    const [val, setVal] = useState('initVal')

    return <div className='surface'>{print(val)}</div>
}

export default OuterFace
