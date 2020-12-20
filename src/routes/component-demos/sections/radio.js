import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const radio = new window.mdc.radio.MDCRadio(document.querySelector('.mdc-radio'));
    const formField = new window.mdc.formField.MDCFormField(document.querySelector('.mdc-form-field'));
    formField.input = radio;
  })
  return (
    <section className="component-section">
         <div className="section-header">
            <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio" className="mdc-button" target="_blank">
              <span className="mdc-button__label">Radio Button</span>
              <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
            </a>
          </div>
          <hr className="mdc-list-divider" />
          <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>

            <div>

            <div className="mdc-form-field">
              <div className="mdc-radio">
                <input className="mdc-radio__native-control" type="radio" id="radio-1" name="radios" defaultChecked />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
                <div className="mdc-radio__ripple"></div>
              </div>
              <label htmlFor="radio-1">Yes</label>
            </div>
            <div className="mdc-form-field">
              <div className="mdc-radio">
                <input className="mdc-radio__native-control" type="radio" id="radio-1" name="radios" />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
                <div className="mdc-radio__ripple"></div>
              </div>
              <label htmlFor="radio-1">No</label>
            </div>

            <div className="mdc-form-field">
              <div className="mdc-radio mdc-radio--disabled">
                <input className="mdc-radio__native-control" type="radio" id="radio-2" name="radios" disabled />
                <div className="mdc-radio__background">
                  <div className="mdc-radio__outer-circle"></div>
                  <div className="mdc-radio__inner-circle"></div>
                </div>
                <div className="mdc-radio__ripple"></div>
              </div>
              <label htmlFor="radio-2">Disabled</label>
            </div>

            </div>

          </div>
  </section>
  )
}
