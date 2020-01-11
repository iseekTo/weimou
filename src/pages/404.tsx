/**
 * @copyright by lyb in shanghai 2020年01月10日23:05:59
 * 
 */
import React, { FC, useState, memo, useEffect } from 'react'

type ButtonProps = {
    color: string
}

const btnEqual = (preProps, nextProps) => {
    if (preProps.color === nextProps.color) {
        return false
    }
    return true
}

// 讲道理这里是不应该更新的，他只是一个纯显示的color按钮
// 所以我们用 React.memo 进行优化 
// React.memo 支持传入一个"比较"的函数，类似class的shouldComponentUpdate
// 使用类的话可以用 React.PureComponent
const Button: FC<ButtonProps> = memo( ({ color }) => {
    console.log('111')
    return <button style={{ color }}>{color}</button>
})





const NotFound = () => {
    const [val, setVal] = useState<number>(0)

    return (
        <>
        <h1 style={{ textAlign: 'center' }}>
            
            404！找不到此页面！
        </h1>
        <h3>{val}</h3>
        <button onClick={() => setVal(n => n + 1)}>click me to plus</button>
        <Button color='red' />
        </>
    )
}

export default NotFound
