import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import RNmd from '../../RN启动.md'


const CodeBlock = ({ value }) => {

    return <SyntaxHighlighter language='' style={atelierCaveDark}>{value}</SyntaxHighlighter>
}

const Markedemo = () => {

    return (
        <>
            <ReactMarkdown
                source={RNmd}
                escapeHtml={false}
                renderers={{
                    "code": CodeBlock
                }}
            />
        </>
    )
}

export default Markedemo
