import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from 'web/components/App';
import Home from 'web/components/Home';

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
      <Route path="/about" component={About} />
      <Route path="/topics/:topicId" component={Topic} />
    </App>
  </Router>
);

export default BasicExample;
