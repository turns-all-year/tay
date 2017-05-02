import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from 'web/App';
import Home from 'web/pages/Home';
import User from 'web/pages/User';

const About = () => (
  <div>
    about
  </div>
);

const Topic = ({ match }) => ( // eslint-disable-line
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const BasicExample = () => (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/users/:userId" component={User} />
      <Route path="/about" component={About} />
      <Route path="/topics/:topicId" component={Topic} />
    </App>
  </Router>
);

export default BasicExample;
