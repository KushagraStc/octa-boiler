import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import './App.css';
import logo from './logo.svg';

function Home() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => {
    await oktaAuth.signInWithRedirect({ sessionToken: '20111h3kzm_auy0GBf14W39FEsh3MdqmufvdxvyEbYkK8pTPe9lgpxn', prompt: 'none' });
    //  await oktaAuth.signInWithRedirect();
  };

  const logout = async () => {
    await oktaAuth.signOut();
  };

  let body = null;
  if (authState?.isAuthenticated) {
    body = (
      <div className="Buttons">
        <button onClick={logout}>Logout</button>
        {/* Replace me with your root component. */}
      </div>
    );
  } else {
    body = (
      <div className="Buttons">
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {body}
      </header>
    </div>
  );
}

export default Home;
