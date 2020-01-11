import React, { useState, useRef, useEffect } from 'react'
import InputDom from '../components/InputDom'

const baseUrl: string = 'https://www.mxnzp.com/api/lottery/common/types'

interface IlistData<T = []> {
    msg: string;
    code: number;
    data: T;
}

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
]

const ks = {}

people.forEach(val => {
    if (!ks[val.age]) {
        ks[val.age] = []
    }
    ks[val.age].push(val)
})

const Lottery = () => {
    const nameRef = useRef(null)
    const [name, setName] = useState<string>('')
    const [listData, setListData] = useState<IlistData[]>([])
    const [load, setLoad] = useState<boolean>(false)

    const fetchLottery = () => {
        // let data = await fetch(baseUrl)
        // console.log(data);

        fetch(baseUrl)
            .then((re: any) => {
                setLoad(true)
                return re.json()
            })
            .then(r => {
                setTimeout(() => {
                    setLoad(false)
                }, 500)
                setListData(r.data)
            })
    }

    const onChangeName = (value: string) => {
        setName(value)
    }

    useEffect(() => {
        nameRef.current.focus()
        console.log('获取数据的更改不会引发这里更新')
        // return () => nameRef.current.blur()
    }, [name])

    return (
        <div>
            <h1>fetch lottery-- {name}</h1>
            <InputDom
                value={name}
                onChange={onChangeName}
                ref={nameRef}
            />

            <ul>
                {load ? (
                    <span>loading...</span>
                ) : listData.length ? (
                    listData.map((lottery: any) => (
                        <li key={lottery.typeCode}>{lottery.openTime}</li>
                    ))
                ) : (
                    <span>error data</span>
                )}
            </ul>
            <button
                type='button'
                onClick={fetchLottery}
            >
                查看json数据
            </button>
        </div>
    )
}

export default Lottery
