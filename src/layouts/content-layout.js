import React, { Component, Fragment } from 'react';

import Header from '@src/components/header'
import AsideMenu from '@src/components/aside-menu'

export default class ComponentName extends Component {
  render() {
    return (
      <Fragment>
      <Header />
      <div className="site-main">
        <div className="site-content mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-1-tablet">
              <AsideMenu />
            </div>
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-9-desktop mdc-layout-grid__cell--span-7-tablet">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    );
  }
}