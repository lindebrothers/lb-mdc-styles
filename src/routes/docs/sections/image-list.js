import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const linearProgress = new window.mdc.linearProgress.MDCLinearProgress(document.querySelector('.mdc-linear-progress'));
  })
  return (
    <section className="component-section">
      <div className="section-header">
      <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list" className="mdc-button" target="_blank">
        <span className="mdc-button__label">Image list</span>
        <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
      </a>
    </div>
    <hr className="mdc-list-divider" />
    <div className="">

    <ul className="mdc-image-list mdc-image-list--masonry helper-image-list--column-2">
      <li className="mdc-image-list__item">
        <img className="mdc-image-list__image" src={`https://loremflickr.com/240/320/cat?random=${Math.random()}`} />
      </li>
      <li className="mdc-image-list__item">
        <img className="mdc-image-list__image" src={`https://loremflickr.com/320/240/dog?random=${Math.random()}`} />
      </li>
      <li className="mdc-image-list__item">
        <img className="mdc-image-list__image" src={`https://loremflickr.com/240/320/lion?random=${Math.random()}`} />
      </li>
      <li className="mdc-image-list__item">
        <img className="mdc-image-list__image" src={`https://loremflickr.com/320/230/bird?random=${Math.random()}`} />
      </li>
      <li className="mdc-image-list__item">
        <img className="mdc-image-list__image" src={`https://loremflickr.com/240/320/hourse?random=${Math.random()}`} />
      </li>
      <li className="mdc-image-list__item">
        <img className="mdc-image-list__image" src={`https://loremflickr.com/320/230/elephant?random=${Math.random()}`} />
      </li>
    </ul>




    </div>
  </section>
  )
}
