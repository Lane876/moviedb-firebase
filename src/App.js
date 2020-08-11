import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
    </BrowserRouter>
  );
}

export default App;
