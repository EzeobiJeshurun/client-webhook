import React,{Fragment} from 'react';

import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
    <div className="App">
     <Router>
       <Switch>
        <Route exact path="/" component={Home} />
       </Switch>
     </Router>
    </div>
    </Fragment>
  );
}

export default App;
