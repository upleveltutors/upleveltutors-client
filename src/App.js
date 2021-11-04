// import './App.css';
// import React, fragment, and useState
import React, { Fragment, useState } from 'react'
// import route from router dom
import { Route } from 'react-router-dom'

// import Header from "./components/Header/Header"
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn"
import SignOut from "./components/SignOut/SignOut"

function App() {
  // Declare user variable
  const [user, setUser] = useState(null)

  // clearUser = () => this.setState({ user: null })

  return (
    <Fragment>
      {/* <Header user={user}/> */}
      <Route path='/sign-up' render={() => {
        <SignUp setUser={setUser}/>
      }} />
      <Route path='/sign-in' render={() => (
        <SignIn setUser={this.setUser} />
      )} />
      <AuthenticatedRoute user={user} path='/sign-out' render={() => (
        <SignOut user={user}/>
      )} />
    </Fragment>
  );
}

export default App;
