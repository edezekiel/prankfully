import React, { Component } from 'react';
import HomePage from './HomePage'
import Pranks from './Pranks'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'
import Footer from './Footer'

// galaxy picture
// https://images.unsplash.com/photo-1540449078594-94d6173856c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2730&q=80

class App extends Component {
  render() {
    return (
      <div style={{"height": "100vh"}}>
        <NavBar />
        <Switch>
          <Route exact path="/pranks" component={Pranks}/>
          <Route exact path="/" component={HomePage}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
