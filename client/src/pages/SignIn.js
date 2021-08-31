import { useState } from 'react'
import '../styles/App.css';

function SignIn() {

  const handleSignIn = () => {
    console.log("Signed in!")
  }
  
  return (
    <div className="SignIn">
      <h1>Welcome back!</h1>
      <div id="signin">
                <label htmlFor="return-email">Email</label><br />
                <input id="return-email"></input><br />
                <label htmlFor="return-password">Password</label><br />
                <input type="password" id="return-password"></input><br />
                <button onClick={handleSignIn}>Sign me in!</button>
            </div>
    </div>
  );
}

export default SignIn;