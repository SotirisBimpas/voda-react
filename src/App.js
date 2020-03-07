import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import HomePageContainer from './pages/HomePageContainer';
import SecondPageContainer from './pages/SecondPageContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/home" component={HomePageContainer} />
            <Route path="/page-2" component={SecondPageContainer} />
            <Redirect to="/home" />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
