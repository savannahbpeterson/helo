import React, { Component } from 'react';
import logo from './logo.svg';
import routes from './routes'
import './App.css';

//components
import Nav from './component/Nav/Nav'
// import Auth from './component/Auth/Auth'
// import Dashboard from './component/Dashboard/Dashboard'
// import Form from './component/Form/Form'
// import Post from './component/Post/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
