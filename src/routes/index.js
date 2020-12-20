import React from "react"
import { Switch, Route, HashRouter } from 'react-router-dom'
import ComponentDemos from './component-demos'
import Index from './index-page'
import Docs from './docs'


export default () => (
  <HashRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/docs/" component={Docs} />
        <Route path="/demo/components" component={ComponentDemos} />
      </Switch>
    </React.Fragment>
  </HashRouter>
)
