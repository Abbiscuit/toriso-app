import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Posts from './pages/posts/posts.component';
import Profile from './pages/profile/profile.component';
import Developers from './pages/developers/developers.component';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/developers" component={Developers} />
      </Switch>
    </Fragment>
  );
}

export default App;
