import React, { useEffect, useRef, Fragment } from 'react';

export default (props) => {
  const snackbarRef = useRef(null)
  useEffect(() => {


    const snackbar = new window.mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Snackbar</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div>



  <div className="mdc-snackbar mdc-snackbar--open" style={{position: 'static'}}>
  <div className="mdc-snackbar__surface" role="status" aria-relevant="additions">
    <div className="mdc-snackbar__label" aria-atomic="false">
      Saved.
    </div>
  </div>
</div>







  </div>
  </section>
  )
}
