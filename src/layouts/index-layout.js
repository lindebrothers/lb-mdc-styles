import React, { Component, Fragment } from 'react';

import Header from '@src/components/header'

export default class ComponentName extends Component {
  render() {
    return (
      <Fragment>
      <Header />
      <div className="site-main">
        { this.props.children }
      </div>
    </Fragment>
    );
  }
}