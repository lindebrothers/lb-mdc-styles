import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import CreateNavigation from '@src/components/create-navigation'

const componentName = (props) => {

  return (
    <aside>
      <nav className="mdc-list">
      <div className="visible-in-desktop visible-in-phone"><h6 className="mdc-list-group__subheader">Demo</h6></div>
      <Link component={CreateNavigation} to="/demo/components" className={`mdc-list-item${props.location.pathname === '/demo/components' || props.location.pathname === '/demo/components' ? ' mdc-list-item--activated' : ''}`} aria-current="page">
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">extension</i>
        <span className="mdc-list-item__text">Components</span>
      </Link>
      <Link component={CreateNavigation} to="/demo/pages" className={`mdc-list-item${props.location.pathname === '/demo/pages' ? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">view_compact</i>
        <span className="mdc-list-item__text">Blocket Pages</span>
      </Link>
      <hr className="mdc-list-divider" />
      <div className="visible-in-desktop visible-in-phone"><h6 className="mdc-list-group__subheader">Docs</h6></div>
      <Link component={CreateNavigation} to="/docs/getting-started" className={`mdc-list-item${props.location.pathname === '/docs/getting-started' ? ' mdc-list-item--activated' : ''}`} aria-current="page">
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">play_circle_outline</i>
        <span className="mdc-list-item__text">Getting started</span>
      </Link>
      <Link component={CreateNavigation} to="/docs/concept" className={`mdc-list-item${props.location.pathname === '/docs/concept' ? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">build</i>
        <span className="mdc-list-item__text">The Concept</span>
      </Link>
      <Link component={CreateNavigation} to="/docs/helper-classes" className={`mdc-list-item${props.location.pathname === '/docs/helper-classes' ? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">support</i>
        <span className="mdc-list-item__text">Helper classes</span>
      </Link>


      <hr className="mdc-list-divider" />
      <div className="visible-in-desktop visible-in-phone"><h6 className="mdc-list-group__subheader">Blocket Design</h6></div>
      <Link component={CreateNavigation} to="/docs/theme-and-typography" className={`mdc-list-item${props.location.pathname === '/docs/theme-and-typography'? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">font_download</i>
        <span className="mdc-list-item__text">Theme and typography</span>
      </Link>
      <Link component={CreateNavigation} to="/docs/logotype" className={`mdc-list-item${props.location.pathname === '/docs/logotype'? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">adjust</i>
        <span className="mdc-list-item__text">Logotype</span>
      </Link>
      <Link component={CreateNavigation} to="/docs/images-and-icons" className={`mdc-list-item${props.location.pathname === '/docs/images-and-icons' ? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">insert_photo</i>
        <span className="mdc-list-item__text">Images & Icons</span>
      </Link>
      <Link component={CreateNavigation} to="/docs/favicons" className={`mdc-list-item${props.location.pathname === '/docs/favicons' ? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">adjust</i>
        <span className="mdc-list-item__text">Favicon</span>
      </Link>
      <Link component={CreateNavigation} to="/docs/fonts" className={`mdc-list-item${props.location.pathname === '/docs/fonts' ? ' mdc-list-item--activated' : ''}`}>
        <span className="mdc-list-item__ripple"></span>
        <i className="material-icons mdc-list-item__graphic" aria-hidden="true">text_fields</i>
        <span className="mdc-list-item__text">Fonts</span>
      </Link>
 
    </nav>
    </aside>
  );
}


export default withRouter(componentName);