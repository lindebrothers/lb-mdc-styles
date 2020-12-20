import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {

  })
  return (
    <section className="component-section">
      <div className="section-header">
        <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer  " className="mdc-button" target="_blank">
          <span className="mdc-button__label">Drawer</span>
          <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
        </a>
      </div>
      <hr className="mdc-list-divider" />
      <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 300, backgroundColor: 'var(--blocket-color-lightgray)'}}>


      <div className="mdc-drawer">
        <div className="mdc-drawer__content">
          <nav className="mdc-list">
            <a className="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
              <span className="mdc-list-item__ripple"></span>
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
              <span className="mdc-list-item__text">Inbox</span>
            </a>
            <a className="mdc-list-item" href="#">
              <span className="mdc-list-item__ripple"></span>
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
              <span className="mdc-list-item__text">Outgoing</span>
            </a>
            <a className="mdc-list-item" href="#">
              <span className="mdc-list-item__ripple"></span>
              <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
              <span className="mdc-list-item__text">Drafts</span>
            </a>
          </nav>
        </div>
      </div>

      </div>
    </section>
  )
}
