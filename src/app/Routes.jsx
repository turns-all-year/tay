import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => ( // eslint-disable-line
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics/123">Topic 123</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics/:topicId" component={Topic} />
    </div>
  </Router>
);

export default BasicExample;
