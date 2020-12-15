import React, { useState } from 'react';
import './App.css';

import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import Login from './components/Login/';
import Register from './components/Register';
import Messages from './components/Messages';

function App() {

  const [token, setToken] = useState('');


  return (
    <div className="App">
      <Link to='/messages' className="ad-hoc-link">Messages</Link>
      <Switch>

        <Route exact path='/'>
          <Login setToken={ setToken } />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/messages'>
          <Messages token={ token } />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
