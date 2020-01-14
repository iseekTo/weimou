import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import RNmd from '../../RN启动.md'


const CodeBlock = ({ value }) => {

    return <SyntaxHighlighter language='' style={atelierCaveDark}>{value}</SyntaxHighlighter>
}

const Markedemo = () => {

    return (
        <>
            1111
        </>
    )
}

export default Markedemo
