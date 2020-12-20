import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const selector = '.mdc-card__primary-action';
    const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
      return new window.mdc.ripple.MDCRipple(el);
    });
  })
  return (
    <section className="component-section">
      <div className="section-header">
        <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card  " className="mdc-button" target="_blank">
          <span className="mdc-button__label">Card</span>
          <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
        </a>
      </div>
      <hr className="mdc-list-divider" />
      <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{minHeight: 300}}>


<div className="mdc-card helper-full-width">
        <div className="mdc-card__primary-action">
          <div className="mdc-card__media mdc-card__media--16-9">
            <div className="mdc-card__media-content" style={{backgroundImage: `url('https://loremflickr.com/320/180/mountain')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100% 100%'}}>
            
            </div>
          </div>

          <div className="mdc-card__primary">
            <h3 className="mdc-typography mdc-typography--overline">Säljes</h3>
            <h2 className="mdc-typography mdc-typography--headline6">Retro Monark cykel</h2>
          </div>
          <div className="mdc-card__secondary mdc-typography mdc-typography--body2">
            500kr
          </div>
        </div>
        <div className="mdc-card__actions">
          <div className="mdc-card__action-buttons">
            <button className="mdc-button mdc-card__action mdc-card__action--button">
              <div className="mdc-button__ripple"></div>
              <span className="mdc-button__label">Visa</span>
            </button>
            <button className="mdc-button mdc-card__action mdc-card__action--button">
              <div className="mdc-button__ripple"></div>
              <span className="mdc-button__label">Ring</span>
            </button>
          </div>
          <div className="mdc-card__action-icons">
            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">phone</button>
            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">message</button>
            <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">share</button>
          </div>
        </div>
</div>



      </div>
    </section>
  )
}
