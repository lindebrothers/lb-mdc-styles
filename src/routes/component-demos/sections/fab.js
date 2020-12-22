import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const ripples = [].map.call(document.querySelectorAll('.mdc-fab'), function(el) {
      return new window.mdc.ripple.MDCRipple(el)
    })
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Fab</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>
    <div className="mdc-touch-target-wrapper" style={{color: 'green'}}>
      <button className="mdc-fab" aria-label="Favorite">
        <div className="mdc-fab__ripple"></div>
        <span className="mdc-fab__icon material-icons">favorite</span>
      </button>
    </div>
    <div className="mdc-touch-target-wrapper">
      <button className="mdc-fab mdc-fab--extended">
        <div className="mdc-fab__ripple"></div>
        <span className="material-icons mdc-fab__icon">add</span>
        <span className="mdc-fab__label">Create</span>
      </button>
    </div>
    <div className="mdc-touch-target-wrapper">
      <button className="mdc-fab mdc-fab--mini" aria-label="Favorite">
        <div className="mdc-fab__ripple"></div>
        <span className="mdc-fab__icon material-icons">delete</span>
      </button>
    </div>
  </div>
  </section>
  )
}
