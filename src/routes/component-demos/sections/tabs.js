import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    /*
    const ripples = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
      const _ripple = new window.mdc.ripple.MDCRipple(el)
      _ripple.layout()
      return _ripple
    })
    */
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabbar" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Tabs</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>
    
  <div className="mdc-tab-bar" role="tablist">
  <div className="mdc-tab-scroller">
    <div className="mdc-tab-scroller__scroll-area">
      <div className="mdc-tab-scroller__scroll-content">
        <button className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabIndex="0">
          <span className="mdc-tab__content">
            <span className="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
            <span className="mdc-tab__text-label">Tab</span>
          </span>
          <span className="mdc-tab-indicator mdc-tab-indicator--active">
            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
          <span className="mdc-tab__ripple"></span>
        </button>
        <button className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabIndex="0">
          <span className="mdc-tab__content">
            <span className="mdc-tab__icon material-icons" aria-hidden="true">add</span>
            <span className="mdc-tab__text-label">Tab</span>
          </span>
          <span className="mdc-tab-indicator">
            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
          <span className="mdc-tab__ripple"></span>
        </button>
        <button className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabIndex="0">
          <span className="mdc-tab__content">
            <span className="mdc-tab__icon material-icons" aria-hidden="true">delete</span>
            <span className="mdc-tab__text-label">Tab</span>
          </span>
          <span className="mdc-tab-indicator">
            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
          <span className="mdc-tab__ripple"></span>
        </button>
      </div>
    </div>
  </div>
</div>


  </div>
  </section>
  )
}
