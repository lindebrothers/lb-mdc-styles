import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const list = new window.mdc.list.MDCList(document.querySelector('.mdc-list'));
    const listItemRipples = list.listElements.map((listItemEl) => new window.mdc.ripple.MDCRipple(listItemEl));
  })
  return (
    <section className="component-section">
    <div className="section-header">
      <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-list" className="mdc-button" target="_blank">
        <span className="mdc-button__label">List</span>
        <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
      </a>
    </div>
    
  <div className="">

  <ul className="mdc-list mdc-list--avatar-list" style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}>
  <li className="mdc-list-item" tabIndex="0">
    <span className="mdc-list-item__ripple"></span>
    <span className="mdc-list-item__graphic material-icons" aria-hidden="true">favorite</span>
    <span className="mdc-list-item__text">Item 1 - Division 1</span>
  </li>
  <li className="mdc-list-item">
    <span className="mdc-list-item__ripple"></span>
    <span className="mdc-list-item__graphic material-icons" aria-hidden="true">add</span>
    <span className="mdc-list-item__text">Item 2 - Division 1</span>
  </li>
  <li role="separator" className="mdc-list-divider"></li>
  <li className="mdc-list-item">
    <span className="mdc-list-item__ripple"></span>
    <span className="mdc-list-item__graphic material-icons" aria-hidden="true">delete</span>
    <span className="mdc-list-item__text">Item 1 - Division 2</span>
  </li>
  <li className="mdc-list-item">
    <span className="mdc-list-item__ripple"></span>
    <span className="mdc-list-item__graphic material-icons" aria-hidden="true">share</span>
    <span className="mdc-list-item__text">Item 2 - Division 2</span>
  </li>
</ul>


  </div>
  </section>
  )
}
