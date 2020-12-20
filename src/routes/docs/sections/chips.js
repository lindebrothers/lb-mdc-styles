import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {

    const initializedComponent = [].map.call(document.querySelectorAll('.mdc-chip-set'), function(el) {
      return new window.mdc.chips.MDCChipSet(el)
    })
  })
  return (
    <section className="component-section">
    <div className="section-header">
    <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips" className="mdc-button" target="_blank">
      <span className="mdc-button__label">Chips</span>
      <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
    </a>
  </div>
  <hr className="mdc-list-divider" />

  <div className="helper-full-width">
    <div className="mdc-chip-set" role="grid">
      <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabIndex="0" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Chip One</span>
          </span>
        </span>
      </div>
      <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabIndex="-1" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Chip Two</span>
          </span>
        </span>
      </div>
      <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabIndex="-1" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Chip Tree</span>
          </span>
        </span>
      </div>
    </div>
  </div>
  <div className="helper-full-width">
    <div className="mdc-chip-set" role="grid">

      <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <i className="material-icons mdc-chip__icon mdc-chip__icon--leading">event</i>
        <span role="gridcell">
          <span role="button" tabIndex="0" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Leading icon</span>
          </span>
        </span>
      </div>

      <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabIndex="0" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Trailing icon</span>
          </span>
        </span>
        <span role="gridcell">
          <i className="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabIndex="-1" role="button">cancel</i>
        </span>
      </div>
    
      
    </div>
  </div>

  <div className="helper-full-width">
    <div className="mdc-chip-set mdc-chip-set--choice" role="grid">

    <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <i className="material-icons mdc-chip__icon mdc-chip__icon--leading">check</i>
        <span role="gridcell">
          <span role="button" tabIndex="0" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Choise</span>
          </span>
        </span>
      </div>

    </div>
  </div>

  <div className="helper-full-width">
    <div className="mdc-chip-set mdc-chip-set--choice" role="grid">

      <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <span className="mdc-chip__checkmark" >
          <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
            <path className="mdc-chip__checkmark-path" fill="none" stroke="black"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
        </span>
        <span role="gridcell">
          <span role="checkbox" tabIndex="0" aria-checked="false" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Filterable content</span>
          </span>
        </span>
      </div>

    </div>
  </div>

  <div className="helper-full-width">
    <div className="mdc-chip-set mdc-chip-set--input" role="grid">

      <div className="mdc-chip" role="row">
        <div className="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabIndex="0" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Chip One</span>
          </span>
        </span>
      </div>

    </div>
  </div>

  <div className="helper-full-width">
    <div className="mdc-chip-set mdc-chip-set--filter" role="grid">
      <div className="mdc-chip mdc-chip--selected" role="row">
        <div className="mdc-chip__ripple"></div>
        <i className="material-icons mdc-chip__icon mdc-chip__icon--leading mdc-chip__icon--leading-hidden">face</i>
        <span className="mdc-chip__checkmark">
          <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
            <path className="mdc-chip__checkmark-path" fill="none" stroke="black"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
        </span>
        <span role="gridcell">
          <span role="checkbox" tabIndex="0" aria-checked="true" className="mdc-chip__primary-action">
            <span className="mdc-chip__text">Changing icon</span>
          </span>
        </span>
      </div>
    </div>
  </div>

  </section>
  )
}
