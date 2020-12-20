import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {

    const select = new window.mdc.select.MDCSelect(document.querySelector('.mdc-select'));

    select.listen('MDCSelect:change', () => {
      //alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
      select.layout()
    });

  })
  return (
    <section className="component-section">
         <div className="section-header">
            <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-select" className="mdc-button" target="_blank">
              <span className="mdc-button__label">Select</span>
              <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
            </a>
          </div>
          





              <div className="mdc-select mdc-select--outlined" style={{width: '100%'}}>
                <div className="mdc-select__anchor" aria-labelledby="outlined-select-label2">
                  <span className="mdc-notched-outline">
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch">
                      <span id="outlined-select-label2" className="mdc-floating-label">Some select label</span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                  </span>
                  <span className="mdc-select__selected-text-container" style={{width: '100%'}}>
                    <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                  </span>
                  <span className="mdc-select__dropdown-icon">
                    <svg
                        className="mdc-select__dropdown-icon-graphic"
                        viewBox="7 10 10 5" focusable="false">
                      <polygon
                          className="mdc-select__dropdown-icon-inactive"
                          stroke="none"
                          fillRule="evenodd"
                          points="7 10 12 15 17 10">
                      </polygon>
                      <polygon
                          className="mdc-select__dropdown-icon-active"
                          stroke="none"
                          fillRule="evenodd"
                          points="7 15 12 10 17 15">
                      </polygon>
                    </svg>
                  </span>
                </div>


                <div className="mdc-select__menu mdc-menu mdc-menu-surface" style={{width: '99%'}}>
                  <ul className="mdc-list">
                    <li className="mdc-list-item" data-value="pasta">
                      <span className="mdc-list-item__ripple"></span>
                      <span className="mdc-list-item__text">Pasta</span>
                    </li>
                    <li className="mdc-list-item mdc-list-item--selected" data-value="vegetables" aria-selected="true">
                      <span className="mdc-list-item__ripple"></span>
                      <span className="mdc-list-item__text">Vegetables</span>
                    </li>
                    <li className="mdc-list-item" data-value="fruit">
                      <span className="mdc-list-item__ripple"></span>
                      <span className="mdc-list-item__text">Fruit</span>
                    </li>
                  </ul>
                </div>




           

          </div>
  </section>
  )
}
