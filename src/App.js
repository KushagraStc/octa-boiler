import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, useHistory, useLocation } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import Home from './Home2';
import Profile from './profiles';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-11343521.okta.com/oauth2/default',
  clientId: '0oa8fa7uhiHGz6qYA5d7',
  redirectUri: window.location.origin + '/login/callback'
});

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const restoreOriginalUri = useCallback(
    async (_oktaAuth, originalUri) => {
      history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    },
    [history]
  );

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/login/callback" component={LoginCallback}/>
    </Security>
  );
}

const RouterApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default RouterApp;
