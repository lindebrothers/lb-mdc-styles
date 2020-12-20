import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const ripples = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
      const _ripple = new window.mdc.ripple.MDCRipple(el)
      _ripple.layout()
      return _ripple
    })
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Button</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>
    <div>
      <button className="mdc-button">
          <div className="mdc-button__ripple"></div>
          Button
      </button>
    </div>
    <div>
      <button className="mdc-button mdc-button--raised">
      <div className="mdc-button__ripple"></div>
          Button
      </button>
    </div>
    <div>
      <button className="mdc-button mdc-button--outlined">
      <div className="mdc-button__ripple"></div>
          Button
      </button>
    </div>
  </div>
  </section>
  )
}
