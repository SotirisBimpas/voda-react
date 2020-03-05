import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/page-2" component={SecondPage} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
