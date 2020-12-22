import React from 'react';
import Markdown from '@src/components/markdown-handler'

const OutputComponent = (props) => <Markdown source={props.md} />
export default (md) => OutputComponent({md})