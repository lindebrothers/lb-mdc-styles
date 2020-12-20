import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const menu = new window.mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
    menu.open = false;
    document.querySelector('#menu-button').addEventListener('click', () => {
      menu.open = !menu.open;
    });

  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Menu</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />
  <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{height: 100}}>


    <div id="demo-menu" className="mdc-menu-surface--anchor">
    <button id="menu-button" className="mdc-button mdc-button--raised" >Open Menu</button>

    <div className="mdc-menu mdc-menu-surface" id="demo-menu">
  <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabIndex="-1">
    <li>
      <ul className="mdc-menu__selection-group">
        <li className="mdc-list-item" role="menuitem">
          <span className="mdc-list-item__ripple"></span>
          <span className="mdc-list-item__graphic mdc-menu__selection-group-icon">
            <i className="material-icons">search</i>
          </span>
          <span className="mdc-list-item__text">Some option</span>
        </li>
        <li className="mdc-list-item" role="menuitem">
          <span className="mdc-list-item__ripple"></span>
          <span className="mdc-list-item__graphic mdc-menu__selection-group-icon">
            <i className="material-icons">add</i>
          </span>
          <span className="mdc-list-item__text">Other option</span>
        </li>
      </ul>
    </li>
    <li className="mdc-list-divider" role="separator"></li>
    <li className="mdc-list-item" role="menuitem">
      <span className="mdc-list-item__ripple"></span>
      <span className="mdc-list-item__text">Some extra option</span>
    </li>
    <li className="mdc-list-item" role="menuitem">
      <span className="mdc-list-item__ripple"></span>
      <span className="mdc-list-item__text">Other extra option</span>
    </li>
  </ul>
</div>


    </div>
    <div>

    </div>
    <div>

    </div>
  </div>
  </section>
  )
}
