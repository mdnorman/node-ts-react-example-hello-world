import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import { BadRoute } from './pages/BadRoute';

export class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="*" component={BadRoute} />
      </Switch>
    );
  }
}
