import React, { forwardRef, useState, ChangeEvent } from 'react'

export type strNum = string | number;
type inputEvent = ChangeEvent<HTMLInputElement>;

interface IProps {
    value: strNum;
    onChange: (val: strNum) => void;
}

const InputDom = ({ value, onChange }: IProps, ref: any) => {
    // important ->> useState ->> value
    const [_value, setValue] = useState<strNum>(value || '')

    const _onChange = (event: inputEvent) => {
        const { target } = event

        setValue(target.value)
        onChange && onChange(target.value)
    }

    return <input
        type='text'
        value={_value}
        onChange={_onChange}
        ref={ref}
    />
}

export default forwardRef(InputDom)
