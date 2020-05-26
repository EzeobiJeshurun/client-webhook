import React,{Fragment} from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
    <Provider store={store}>
    <div className="App">
     <Router>
       <Switch>
        <Route exact path="/" component={Home} />
       </Switch>
     </Router>
    </div>
    </Provider>
    </Fragment>
  );
}

export default App;
