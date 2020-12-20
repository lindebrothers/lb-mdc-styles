import React, {Fragment, useEffect, useRef} from 'react';

const Component = (props) => {

  useEffect(() => {
    /*
    const drawer = window.mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const topAppBar = window.mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
    */
    const list = new window.mdc.list.MDCList(document.querySelector('.mdc-list'));
    const listItemRipples = list.listElements.map((listItemEl) => new mdc.ripple.MDCRipple(listItemEl));
  });

  return (
      <div className="">
        <ul className="mdc-list">
          <li className="mdc-list-item" tabIndex="0">
            <span className="mdc-list-item__ripple"></span>
            <span className="mdc-list-item__text">Single-line item</span>
          </li>
          <li className="mdc-list-item">
            <span className="mdc-list-item__ripple"></span>
            <span className="mdc-list-item__text">Single-line item</span>
          </li>
          <li className="mdc-list-item">
            <span className="mdc-list-item__ripple"></span>
            <span className="mdc-list-item__text">Single-line item</span>
          </li>
        </ul>
      </div>
  );
}

export default Component;