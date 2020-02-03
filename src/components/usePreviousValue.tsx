import { useRef, useEffect } from 'react'

type strOrNum = number | string

const usePreviousValue = (value: strOrNum) => {
    // 增加一个长久引用的变量 ref 
    const ref = useRef() as any

    // 在useEffect钩子里传递值
    useEffect(() => {
        ref.current = value
    })

    return ref.current
}

export default usePreviousValue
