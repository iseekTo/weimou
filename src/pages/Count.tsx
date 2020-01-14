import React, { useState, useEffect, useReducer } from 'react'
import { useLocation } from 'react-router'
import OuterFace from '../components/OuterSurface'
import useInput from '../components/input'

function initState(initalCount = 0) {
    return {
        counts: initalCount
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { counts: state.counts + 1 }
        case 'del':
            return { counts: state.counts - 1 }
        case 'reset':
            return initState()
        default:
            throw new Error()
    }
}

const Count = ({ init }) => {

    const [count, setCount] = useState(0)
    const nameInput = useInput('')
    const [state, dispatch] = useReducer(reducer, init, initState)

    const localRoute = useLocation()

    console.log(localRoute)

    useEffect(() => {
        document.title = `input value title is ${count}`

        // 使用return返回一个函数，相当于class组件内的 componentWillUnmount 生命周期函数
        return () => {
            document.title = '离开此组件，恢复默认值'
        }
    }, [count])

    useEffect(() => {
        nameInput.ref.current.focus()
    }, [nameInput.ref])


    return (
        <div>
            <h4>count：{count}</h4>
            <button
                type='button'
                onClick={() => setCount(count + 1)}
            >
                plus one
            </button>
            <hr />

            <h4>{nameInput.value}</h4>
            <input
                ref={nameInput.ref}
                {...nameInput}
            />
            <hr />

            <h3>reducer config test value</h3>
            <h4>count: {state.counts}</h4>
            <button
                type='button'
                onClick={() => dispatch({ type: 'add' })}
            >
                add
            </button>
            <button
                type='button'
                onClick={() => dispatch({ type: 'del' })}
            >
                del
            </button>
            <button
                type='button'
                onClick={() => dispatch({ type: 'reset' })}
            >
                reset
            </button>

            <OuterFace print={val => <h1>{val}</h1>} />
        </div>
    )
}

export default Count
