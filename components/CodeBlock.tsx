import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div className="relative group">
            <SyntaxHighlighter language="python" style={oneDark} customStyle={{ borderRadius: '0.5rem', margin: 0 }}>
                {code}
            </SyntaxHighlighter>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white font-sans text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default CodeBlock;