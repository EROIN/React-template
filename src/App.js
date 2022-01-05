import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'

import './App.css';
import { store, history } from './redux/store';

import { Home } from './containers/Home/Home';

function App() {
  return (
    <Provider store={store()}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" render={Home} />
            <Route exact path="/test" render={() => (<><h1>test</h1></>)} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
