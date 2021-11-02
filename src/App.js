// import './App.css';
// import React, fragment, and useState
import React, { Fragment, useState } from 'react'
// import route from router dom
import { Route } from 'react-router-dom'

import SignUp from "./components/SignUp/SignUp";

function App() {
  // Declare user variable
  const [user, setUser] = useState(null)

  return (
    <Fragment>
      <Route path='/sign-up' render={() => {
        <SignUp setUser={setUser}/>
      }} />
    </Fragment>
  );
}

export default App;
