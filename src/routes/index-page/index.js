import React, {useEffect, useRef} from 'react';
import Markdown from '@src/components/markdown-handler'
import gettingStartedCSS from './import-css'
import gettingStartedJS from './import-js'
import gettingStartedHelpers from './import-helpers'
import gettingStartedFonts from './import-fonts'

import SectionButton from '@src/routes/component-demos/sections/button'
import SectionIconButton from '@src/routes/component-demos/sections/icon-button'
import SectionTopAppBar from '@src/routes/component-demos/sections/top-app-bar'
import SectionDrawer from '@src/routes/component-demos/sections/drawer'
import SectionCard from '@src/routes/component-demos/sections/card'
import SectionTextField from '@src/routes/component-demos/sections/textfield'
import SectionTabs from '@src/routes/component-demos/sections/tabs'
import SectionSlider from '@src/routes/component-demos/sections/slider'
import SectionSnackbar from '@src/routes/component-demos/sections/snackbar'
import SectionChips from '@src/routes/component-demos/sections/chips'
import SectionFab from '@src/routes/component-demos/sections/fab'
import SectionSwitch from '@src/routes/component-demos/sections/switch'
import SectionCheckbox from '@src/routes/component-demos/sections/checkbox'
import SectionRadio from '@src/routes/component-demos/sections/radio'
import SectionSelect from '@src/routes/component-demos/sections/select'
import SectionMenu from '@src/routes/component-demos/sections/menu'
import SectionLinearProgress from '@src/routes/component-demos/sections/linear-progress'
import SectionList from '@src/routes/component-demos/sections/list'
import SectionImageList from '@src/routes/component-demos/sections/image-list'
import SectionDialog from '@src/routes/component-demos/sections/dialog'
import SectionDataTable from '@src/routes/component-demos/sections/data-table'
import Layout from '@src/layouts/index-layout'

const IndexPage = (props) => {
  useEffect(() => {
    //const buttonRipple = new window.mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));
  });
  return (

    <Layout>
      <div style={{minHeight: '400px', backgroundColor: 'var(--blocket-color-red)'}}>
        <div className="site-content mdc-layout-grid helper-full-width-height" style={{backgroundColor: 'var(--blocket-color-red)'}}>
          <div className="mdc-layout-grid__inner site-content helper-full-width-height">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet">
              <div className="helper-flex-display helper-flex-column helper-full-width-height" style={{textAlign: 'center'}}>

                  <img src="%BASE_URL%/images/blocket-md-logo-negative.svg" style={{maxHeight: 200, marginTop: '40px'}} />
                  <h1 className="helper-text-negative">Blocket - Web Components User Interface</h1>
                  <h3 className="helper-text-negative">Blocket Branded Material Design Components Library</h3>
                  <button className="mdc-button mdc-button--raised" style={{marginTop: '40px', marginBottom: '40px'}}>View demo</button>
                  <hr className="mdc-list-divider helper-hr-negative helper-full-width" />

                    <div className="helper-flex-display helper-flex-row helper-flex-space-between helper-text-negative helper-full-width helper-turn-on-phone-fluid" style={{padding: 16}}>
                      <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet">
                        Latest Release: %__LIB_VERSION_DOTS__%
                      </div>
                      <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet" style={{textAlign: 'right'}}>
                        MDC version: %__MDC_VERSION__%
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingTop:64, paddingBottom:64, backgroundColor: 'var(--blocket-color-black)'}}>
      <div className="site-content mdc-layout-grid helper-full-width-height helper-text-negative">
        <div className="mdc-layout-grid__inner" style={{textAlign:'center'}}>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet">
            <i className="material-icons" style={{fontSize: 60}}>speed</i>
            <h2>Dev will go faster</h2>
            <p>
              Pre-compiled runtime code means
              no need spending time on compiling
                design code.
            </p>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet">
            <i className="material-icons" style={{fontSize: 60}}>local_police</i>
            <h2>Stable framework</h2>
            <p>
              Taking advantage of 1000 of designers and developers work.
            </p>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet">
          <i className="material-icons" style={{fontSize: 60}}>sentiment_satisfied_alt</i>
            <h2>Don't make users think.</h2>
            <p>
              Many users are familiar with Google's Material Design UI and recognize the behaver and design of it.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div>
        <div className="site-content mdc-layout-grid helper-full-width-height">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet">
            <h1>Getting started</h1>
            <hr className="mdc-list-divider" />
            <p>
                Add following snippets into your html of your application. This will provide you a base setup and a Blocket themed version of material web components.
                Then it is up to you to add MDC dom classes and MDC friendly dom content. <br/><br/>Click on the components button headline, further down,  and you will get DOM code examples.
            </p>
          </div>
        </div>
        <div className="mdc-layout-grid__inner helper-push-down">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet">
            <Markdown source={gettingStartedJS} />
            <Markdown source={gettingStartedHelpers} />
        </div>
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet">
            <Markdown source={gettingStartedCSS} />
            <Markdown source={gettingStartedFonts} />
            </div>
          </div>
        </div>

      </div>
      <div>
        <div className="site-content mdc-layout-grid helper-full-width-height">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet">
            <h1>UI Components Demo</h1>
            <hr className="mdc-list-divider" />
          </div>
        </div>
        <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet">

          <SectionButton />
          <SectionTopAppBar />
          <SectionDrawer />
          <SectionSlider />
          <SectionSnackbar />
          <SectionLinearProgress />
          <SectionChips />
          <SectionMenu />
          <SectionSelect />
          <SectionSwitch />
          <SectionCheckbox />
          <SectionRadio />
          <SectionDataTable />

        </div>
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet">
          <SectionFab />
          <SectionIconButton />
          <SectionCard />
          <SectionDialog />
          <SectionTextField />
          <SectionTabs />
          <SectionList />
          <SectionImageList />
        </div>
      </div>

        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;