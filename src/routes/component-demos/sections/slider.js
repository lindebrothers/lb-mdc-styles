import React, { useEffect, useRef, Fragment } from 'react';

export default (props) => {

  useEffect(() => {

    const slider = new window.mdc.slider.MDCSlider(document.querySelector('.mdc-slider'));
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Slider</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div>





  <div className="mdc-slider mdc-slider--discrete" data-step="10">
  <div className="mdc-slider__track">
    <div className="mdc-slider__track--inactive"></div>
    <div className="mdc-slider__track--active">
      <div className="mdc-slider__track--active_fill" style={{transform: 'scaleX(.5)', left:'0%'}}></div>
    </div>
  </div>
  <div className="mdc-slider__thumb" role="slider" tabIndex="0" aria-label="Discrete slider demo" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" style={{ left: 'calc(50%-24px)'}}>
    <div className="mdc-slider__value-indicator-container">
      <div className="mdc-slider__value-indicator">
        <span className="mdc-slider__value-indicator-text">
          50
        </span>
      </div>
    </div>
    <div className="mdc-slider__thumb-knob"></div>
  </div>
</div>





  </div>
  </section>
  )
}
