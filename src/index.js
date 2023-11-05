import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-cg6n8g818blag5wg.us.auth0.com"
    clientId="AGgW2ZDhFt30vhNGyGDQruCYrLfjxPR7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    
  </React.StrictMode>
);