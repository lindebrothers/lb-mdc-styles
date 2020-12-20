import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const linearProgress = new window.mdc.linearProgress.MDCLinearProgress(document.querySelector('.mdc-linear-progress'));
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Linear progress</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div className="">
    <div role="progressbar" className="mdc-linear-progress mdc-linear-progress--indeterminate" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">
    <div className="mdc-linear-progress__buffer">
      <div className="mdc-linear-progress__buffer-bar"></div>
      <div className="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span className="mdc-linear-progress__bar-inner"></span>
    </div>
    <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span className="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
  </div>
  </section>
  )
}
