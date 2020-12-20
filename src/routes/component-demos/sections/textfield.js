import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const selector = '.mdc-text-field';
    const textfields = [].map.call(document.querySelectorAll(selector), function(el) {
      return new window.mdc.textField.MDCTextField(el);
    });
  })
  return (
    <section className="component-section">
      <div className="section-header">
        <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield" className="mdc-button" target="_blank">
          <span className="mdc-button__label">TextField</span>
          <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
        </a>
      </div>
      <hr className="mdc-list-divider" />
      <div className="helper-children-vspace helper-full-width-children">
        <label className="mdc-text-field mdc-text-field--filled">
          <span className="mdc-text-field__ripple"></span>
          <span className="mdc-floating-label" id="my-label-id">Filled</span>
          <input className="mdc-text-field__input helper-full-width" type="text" aria-labelledby="my-label-id" />
          <span className="mdc-line-ripple"></span>
        </label>
        <label className="mdc-text-field mdc-text-field--outlined">

        <span className="mdc-notched-outline">
          <span className="mdc-notched-outline__leading"></span>
          <span className="mdc-notched-outline__notch">
            <span className="mdc-floating-label" id="my-label-id">Outlined</span>
          </span>
          <span className="mdc-notched-outline__trailing"></span>
        </span>
        <input type="text" className="mdc-text-field__input helper-full-width" aria-labelledby="my-label-id" />
      </label>

      <label className="mdc-text-field mdc-text-field--filled mdc-text-field--disabled">
        <span className="mdc-text-field__ripple"></span>
        <span className="mdc-floating-label" id="my-label-id">Disabled text field</span>
        <input className="mdc-text-field__input" type="text" aria-labelledby="my-label-id" disabled />
        <span className="mdc-line-ripple"></span>
      </label>


      <label className="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label">
        <span className="mdc-notched-outline">
          <span className="mdc-notched-outline__leading"></span>
          <span className="mdc-notched-outline__trailing"></span>
        </span>
        <span className="mdc-text-field__resizer">
          <textarea className="mdc-text-field__input helper-full-width" placeholder="Text area" rows="8" cols="40" aria-label="Label"></textarea>
        </span>
      </label>


      <label className="mdc-text-field mdc-text-field--filled">
        <span className="mdc-text-field__ripple"></span>
        <span className="mdc-floating-label" id="my-label-id">Password</span>
        <input className="mdc-text-field__input" type="password" aria-labelledby="my-label-id" required minLength="8" />
        <span className="mdc-line-ripple"></span>
      </label>




      </div>
    </section>
  )
}
