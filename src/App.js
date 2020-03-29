import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import ProfilePageContainer from './containers/ProfilePageContainer';
import ProfileEditContainer from './containers/ProfileEditContainer';
import TimelinePageContainer from './containers/TimelineContainer';
import PrivateRoute from './containers/Auth/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/user/:id" component={ProfilePageContainer} />
          <PrivateRoute exact path="/timeline" component={TimelinePageContainer} />
          <PrivateRoute exact path="/user/:id/edit" component={ProfileEditContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;