import React, { useEffect, useRef, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const checkbox = new window.mdc.checkbox.MDCCheckbox(document.querySelector('.mdc-checkbox'));
    const formField = new window.mdc.formField.MDCFormField(document.querySelector('.mdc-form-field'));
    formField.input = checkbox;
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Checkbox</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>


    <div>
      <div className="mdc-form-field">
        <div className="mdc-checkbox">
          <input type="checkbox"
                className="mdc-checkbox__native-control"
                id="checkbox-1"/>
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark"
                viewBox="0 0 24 24">
              <path className="mdc-checkbox__checkmark-path"
                    fill="none"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div className="mdc-checkbox__mixedmark"></div>
          </div>
          <div className="mdc-checkbox__ripple"></div>
        </div>
        <label htmlFor="checkbox-1">Checkbox</label>
      </div>  
    </div>

    <div>

      <div className="mdc-checkbox mdc-checkbox--disabled">
        <input type="checkbox"
              id="basic-disabled-checkbox"
              className="mdc-checkbox__native-control"
              disabled />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path className="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div className="mdc-checkbox__mixedmark"></div>
        </div>
        <div className="mdc-checkbox__ripple"></div>
      </div>
    </div>
    <div>

    <div className="mdc-checkbox">
      <input type="checkbox"
            id="basic-indeterminate-checkbox"
            className="mdc-checkbox__native-control"
            data-indeterminate="true" />
      <div className="mdc-checkbox__background">
        <svg className="mdc-checkbox__checkmark"
            viewBox="0 0 24 24">
          <path className="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div className="mdc-checkbox__mixedmark"></div>
      </div>
      <div className="mdc-checkbox__ripple"></div>
    </div>

    </div>



  </div>
  </section>
  )
}
