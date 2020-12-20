import React from 'react';
import Layout from '@src/layouts/content-layout'
import Markdown from '@src/components/markdown-handler'

export const OutputComponent = (props) =>
  <Layout>
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet markdown-body">
        <Markdown source={props.md} />
      </div>
    </div>
  </Layout>

export default (md) => OutputComponent({md})