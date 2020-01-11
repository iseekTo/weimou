import { useRef, useState, useCallback } from 'react'

const useInput = val => {
    const [value, setValue] = useState(val)
    const ref = useRef(null)

    const onChange = useCallback(event => {
        setValue(event.currentTarget.value)
    }, [])

    return {
        ref,
        value,
        onChange
    }
}

export default useInput
