import React, { useEffect, useRef, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const selector = '.mdc-switch';
    const initializedComponent = [].map.call(document.querySelectorAll(selector), function(el) {
      return new window.mdc.switchControl.MDCSwitch(el);
    });
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Switch</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>
    <div>
      <div className="mdc-switch">
        <div className="mdc-switch__track"></div>
        <div className="mdc-switch__thumb-underlay">
          <div className="mdc-switch__thumb"></div>
          <input type="checkbox" id="basic-switch1" className="mdc-switch__native-control" role="switch" aria-checked="false" />
        </div>
      </div>
    </div>

    <div>
      <div className="mdc-switch mdc-switch--checked">
        <div className="mdc-switch__track"></div>
        <div className="mdc-switch__thumb-underlay">
          <div className="mdc-switch__thumb"></div>
          <input type="checkbox" id="basic-switch2" className="mdc-switch__native-control" role="switch" defaultChecked aria-checked="true" />
        </div>
      </div>
    </div>

    <div>
      <div className="mdc-switch mdc-switch--disabled">
        <div className="mdc-switch__track"></div>
        <div className="mdc-switch__thumb-underlay">
          <div className="mdc-switch__thumb"></div>
          <input type="checkbox" id="basic-switch3" className="mdc-switch__native-control" role="switch" aria-checked="false" />
        </div>
      </div>
    </div>



  </div>
  </section>
  )
}
