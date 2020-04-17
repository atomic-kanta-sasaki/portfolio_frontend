import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './Page';
import EntryPage from './EntryPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={EntryPage} exact={true} />
            <Route path='/About' component={Page} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;