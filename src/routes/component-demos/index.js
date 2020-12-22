import React, {useEffect} from 'react';

import Layout from '@src/layouts/content-layout'
import SectionButton from './sections/button'
import SectionIconButton from './sections/icon-button'
import SectionTopAppBar from './sections/top-app-bar'
import SectionDrawer from './sections/drawer'
import SectionCard from './sections/card'
import SectionTextField from './sections/textfield'
import SectionTabs from './sections/tabs'
import SectionSlider from './sections/slider'
import SectionSnackbar from './sections/snackbar'
import SectionChips from './sections/chips'
import SectionFab from './sections/fab'
import SectionSwitch from './sections/switch'
import SectionCheckbox from './sections/checkbox'
import SectionRadio from './sections/radio'
import SectionSelect from './sections/select'
import SectionMenu from './sections/menu'
import SectionLinearProgress from './sections/linear-progress'
import SectionList from './sections/list'
import SectionImageList from './sections/image-list'
import SectionDialog from './sections/dialog'

const IndexPage = (props) => {
  useEffect(() => {

  })

  return (

    <Layout>
      <h2>Demo of the components </h2>
      <hr className="mdc-list-divider" />
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
    </Layout>
  );
}

export default IndexPage;