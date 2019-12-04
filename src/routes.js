import { h } from 'ld-components';
import { Link, Route, location, Switch } from "@hyperapp/router";


import { App } from './views/containers/App';
import { Page } from './views/containers/Page';

export const view = (state, actions) => (

  <div>

    <Switch>
      <Route path="/" render={App} />
      <Route path="/page" render={Page} />
    </Switch>

  </div>

);