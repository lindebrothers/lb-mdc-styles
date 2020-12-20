import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import Layout from '@src/layouts/content-layout'
import Markdown from '@src/components/markdown-handler'
import gettingStartedMD from './getting-started'
import helperClasses from './helper-classes'
import Concept from './concept'
import themeTypography from './theme-and-typography'


const Comp = (props) => {
    const {location} = props
    const [md, setMd] = useState(gettingStartedMD);
    const [pageStatus, setPageStatus] = useState('init');


    useEffect( () => {
      if (location.pathname === '/docs/getting-started') {
        setMd(gettingStartedMD);
      }
      if (location.pathname === '/docs/helper-classes') {
        setMd(helperClasses);
      }
      if (location.pathname === '/docs/concept') {
        setMd(Concept);
      }
      if (location.pathname === '/docs/theme-and-typography') {
        setMd(themeTypography);
      }
      setPageStatus('ready')

  }, [location])


    if (pageStatus !== 'ready') {
      return <div />
    }

    return (

    <Layout>
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet">
          <Markdown source={md} />
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Comp);