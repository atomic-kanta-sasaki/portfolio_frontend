import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Introduction from './ Introduction';
import EntryPage from './EntryPage';
import TechProfile from './TechProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={EntryPage} exact={true} />
            <Route path='/About' component={Introduction} />
            <Route path='/TechProfile' component={TechProfile}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;