import React, { useEffect, useState } from "react";

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import code from "./codeblock";
import paragraph from "./paragraph";
import image from "./image";
import thematicBreak from "./hr";
import {table, tableRow, tableCell, tableBody, tableHead} from "./table";

export default (props) => {
  useEffect(() => {})

  return (
    <ReactMarkdown
      plugins={[gfm, rehypeHighlight]}
      source={props.source}
      allowDangerousHtml={true}
      skipHtml={false}
      renderers={{
        code,
        paragraph,
        table,
        tableRow,
        tableCell,
        tableBody,
        tableHead,
        image,
        thematicBreak,
      }}
    />
  )
}