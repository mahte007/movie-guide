import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary fallback={<ErrorPage />}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ErrorBoundary>
);