import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'web/App';
import Home from 'web/pages/Home';
import User from 'web/pages/User';
import Users from 'web/pages/Users';
import Groups from 'web/pages/Groups';
import Group from 'web/pages/Group';
import Track from 'web/pages/Track';
import Tracks from 'web/pages/Tracks';
import Trip from 'web/pages/Trip';
import Trips from 'web/pages/Trips';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route exact path="users" component={Users} />
    <Route path="users/:userId" component={User} />
    <Route exact path="groups" component={Groups} />
    <Route path="groups/:groupId" component={Group} />
    <Route exact path="trip-reports" component={Trips} />
    <Route path="users/:userId/trip-reports/:tripId" component={Trip} />
    <Route path="trip-reports/:year/:month" component={Trips} />
    <Route exact path="random-tracks" component={Tracks} />
    <Route path="random-tracks/:trackId" component={Track} />
  </Route>
);
