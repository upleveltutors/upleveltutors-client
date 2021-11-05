// import './App.css';
// import React, fragment, and useState
import React, { Fragment, Component } from 'react'
// import route from router dom
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import Header from "./components/Header/Header"
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn"
import SignOut from "./components/SignOut/SignOut"

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

    // Declare user variable
    setUser = user => this.setState({ user })
  
    clearUser = () => this.setState({ user: null })
  
    render () {
      const { user } = this.state

      return (
        <Fragment>
          <Header user={user}/>
          {/* <SignUp setUser={setUser} />
          <SignIn setUser={setUser} /> */}
          <main className="container">
            <Route exact path='/' />
              <Route path='/sign-up' render={() => (
                <SignUp setUser={this.setUser}/>
              )} />
            <Route path='/sign-in' render={() => (
              <SignIn setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut user={user}/>
            )} />
          </main>
        </Fragment>
    )
  }
}

export default App;
