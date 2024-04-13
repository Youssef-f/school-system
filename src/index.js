import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './AuthContext';
import { UsersProvider } from './UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthProvider>
    <UsersProvider>
      <App />
    </UsersProvider>
  </AuthProvider>

);

