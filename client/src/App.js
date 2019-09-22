import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Posts from './pages/posts/posts.component';
import Profile from './pages/profile/profile.component';
import Developers from './pages/developers/developers.component';
import Container from './components/layout/container.component';
import EditProfile from './pages/profile/edit-profile.component';
import PostsComment from './pages/posts/posts-comment';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts-comment" component={PostsComment} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/developers" component={Developers} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
