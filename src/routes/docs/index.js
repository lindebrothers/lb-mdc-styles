import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import Layout from '@src/layouts/content-layout'
import Markdown from '@src/components/markdown-handler'
import WithMarkdown from '@src/components/markdown-handler/with-markdown'
import gettingStartedMD from './getting-started'
import helperClasses from './helper-classes'
import Concept from './concept'
import ThemeAndColorsComp from './theme-colors'
import typography from './typography'


const Comp = (props) => {
    const {location} = props
    const [md, setMd] = useState(WithMarkdown(gettingStartedMD));
    const [pageStatus, setPageStatus] = useState('init');


    useEffect( () => {
      if (location.pathname === '/docs/getting-started') {
        setMd(WithMarkdown(gettingStartedMD));
      }
      if (location.pathname === '/docs/helper-classes') {
        setMd(WithMarkdown(helperClasses));
      }
      if (location.pathname === '/docs/concept') {
        setMd(WithMarkdown(Concept));
      }
      if (location.pathname === '/docs/theme-and-colors') {
        setMd(<ThemeAndColorsComp />);
      }
      if (location.pathname === '/docs/typography') {
        setMd(WithMarkdown(typography));
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
          {md}
          { (location.pathname === '/docs/theme-and-typography' && (
            <div>

<h1>Headline h1</h1>

<h2>Headline h2</h2>

<h3>Headline h3</h3>

<h4>Headline h4</h4>

<h5>Headline h5</h5>

<h6>Headline h6</h6>

<div className="mdc-typography--subtitle1" style={{marginBottom: 16}}>
Subtitle 2 <br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<div className="mdc-typography--subtitle2" style={{marginBottom: 16}}>Subtitle 2<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

<div className="mdc-typography--body1" style={{marginBottom: 16}}>Body 1<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

<div className="mdc-typography--body2" style={{marginBottom: 16}}>Body 2<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

<div className="mdc-typography--caption" style={{marginBottom: 16}}>Caption<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

<div className="mdc-typography--button" style={{marginBottom: 16}}>Button<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

<div className="mdc-typography--overline" style={{marginBottom: 16}}>Overline<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>




            </div>
          ))

          }
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Comp);