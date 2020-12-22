import React, { Component, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import CreateNavigation from '@src/components/create-navigation'

const componentName = (props) => {

  const tabBarRef = useRef(null)
  const tabRef = useRef(null)

  useEffect(() => {
    const MDCTabBar = window.mdc.tabBar.MDCTabBar
    const MDCTab = window.mdc.tab.MDCTab
    const tabBar = [].map.call(document.querySelectorAll('.mdc-tab-bar'), function(el) {
      return el ? new MDCTabBar(el) : null
    });
    const tabs = [].map.call(document.querySelectorAll('.mdc-tab'), function(el) {
      return el ? new MDCTab(el) : null
    });
  })

  return (
    <header className="site-header">
      <div className="site-content mdc-layout-grid" style={{paddingTop: 0, paddingBottom: 0, }}>
        <div className="mdc-layout-grid__inner">
          <section className="mdc-layout-grid__cell--span-2 mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--align-middle">
          <Link component={CreateNavigation} to="/">
            <img src="%BASE_URL%/images/lb-styles-small.png" className="visible-in-desktop visible-in-tablet" height="26" />
            <img src="%BASE_URL%/images/lb-styles-small.png" className="visible-in-phone" height="26" />
          </Link>
          </section>
          <section className="mdc-layout-grid__cell--span-2 mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet">
            <div className="mdc-tab-bar" role="tablist" ref={tabBarRef}>
              <div className="mdc-tab-scroller">
                <div className="mdc-tab-scroller__scroll-area">
                  <div className="mdc-tab-scroller__scroll-content">
                    <Link component={CreateNavigation} to="/demo/components" className={`mdc-tab mdc-tab--stacked${props.location.pathname.toString().startsWith('/demo/components') ? ' mdc-tab--active' : ''}`} role="tab" aria-selected="true" tabIndex="0">
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__icon material-icons" aria-hidden="true">bookmark</span>
                        <span className="mdc-tab__text-label">Docs</span>
                      </span>
                      <span className={`mdc-tab-indicator${props.location.pathname.toString().startsWith('/demo/components') ? ' mdc-tab-indicator--active' : ''}`}>
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                      </span>
                      <span className="mdc-tab__ripple"></span>
                    </Link>
                    <Link component={CreateNavigation} target="_blank" to="//github.schibsted.io/blocket/blocket-web-material-design" className={`mdc-tab mdc-tab--stacked${props.location.toString().startsWith('/somewhere-else') ? ' mdc-tab--active' : ''}`} role="tab" aria-selected="true" tabIndex="0">
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__icon" aria-hidden="true"><img width="24" height="24" src="%BASE_URL%/images/github-icon.svg" /></span>
                        <span className="mdc-tab__text-label">Repo</span>
                      </span>
                      <span className={`mdc-tab-indicator${props.location.pathname.toString().startsWith('/somewhere-else') ? ' mdc-tab-indicator--active' : ''}`}>
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                      </span>
                      <span className="mdc-tab__ripple"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default withRouter(componentName);