import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar';
import RegisterPage from './pages/register';
import StudentPage from './pages/student';



function App() {
  return (
    //<div className='App'>
    <Router>

      
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/signin' component = {SigninPage} exact></Route>
        <Route path='/register' component = {RegisterPage} exact></Route>

        <Route path='/student' component= {StudentPage} exact></Route>
      </Switch>
      {/* <Home />  */}
    </Router>
  );
}

export default App;
