import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const dialog = new window.mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
    dialog.listen('MDCDialog:opened', function() {
      // Assuming contentElement references a common parent element with the rest of the page's content
      //contentElement.setAttribute('aria-hidden', 'true');
    });
    dialog.listen('MDCDialog:closing', function() {
      //contentElement.removeAttribute('aria-hidden');
    });

    document.querySelector('#open-dialog-btn').addEventListener('click', function (evt) {
      event.preventDefault(evt);
      dialog.lastFocusedTarget = evt.target;
      // This shows all dialogs, which is wrong.
      dialog.open ();
    })

  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Dialog</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
    <div className="helper-children-vspace">
      <button id="open-dialog-btn" className="mdc-button mdc-button--raised" >Open Dialog</button>
      <div className="mdc-dialog">
        <div className="mdc-dialog__container">
          <div className="mdc-dialog__surface"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="my-dialog-title"
            aria-describedby="my-dialog-content">
            <div className="mdc-dialog__content" id="my-dialog-content">
              Discard draft?
            </div>
            <div className="mdc-dialog__actions">
              <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="cancel">
                <div className="mdc-button__ripple"></div>
                <span className="mdc-button__label">Cancel</span>
              </button>
              <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="discard">
                <div className="mdc-button__ripple"></div>
                <span className="mdc-button__label">Discard</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mdc-dialog__scrim"></div>
      </div>
    </div>
  </section>
  )
}
