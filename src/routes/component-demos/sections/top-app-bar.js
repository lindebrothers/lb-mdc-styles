import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {

  })
  return (
    <section className="component-section">
      <div className="section-header">
        <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar" className="mdc-button" target="_blank">
          <span className="mdc-button__label">Top App Bar</span>
          <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
        </a>
      </div>
      <hr className="mdc-list-divider" />
      <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>
        <div className="mdc-top-app-bar" style={{position: 'static'}}>
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Close">close</button>
              <span className="mdc-top-app-bar__title">Title</span>
            </section>
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
              <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Share">share</button>
              <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Delete">delete</button>
              <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Open menu">more_vert</button>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
