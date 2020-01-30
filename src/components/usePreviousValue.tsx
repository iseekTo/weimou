import React, { useRef, useEffect } from 'react'

type strOrNum = number | string

const usePreviousValue = (value: strOrNum) => {
    const ref = useRef() as any

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}

export default usePreviousValue
