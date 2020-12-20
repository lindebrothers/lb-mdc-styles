
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// You can find more themes in >> 'node_modules/react-syntax-highlighter/dist/esm/styles/prism/';
import theme from './gh-colors';

const CodeBlock = (props) => {
  const [lang, setLang] = useState('');
  const [val, setVal] = useState('');
  const { language, value } = props
  useEffect(() => {
    setLang(language)
    setVal(value)
  })

  return (
    <SyntaxHighlighter language={lang} style={theme} showLineNumbers={props.showLineNumbers || false}>
      {val}
    </SyntaxHighlighter>
  );
}
CodeBlock.defaultProps = {
  language: null
}
CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
}

export default CodeBlock;