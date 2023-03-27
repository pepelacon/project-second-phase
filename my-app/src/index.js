import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain="dev-b5aepjlcnajdqkre.us.auth0.com"
      clientId="IqCukt0FT3u5dyzJ5l0V6YnBrpWYtZCP"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
        <App />
    </Auth0Provider>
  </BrowserRouter>
  
  </React.StrictMode>
);

reportWebVitals();

