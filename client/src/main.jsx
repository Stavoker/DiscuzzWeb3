import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
import { TransactionsProvider } from "./context/TransactionContext.jsx";
import { ClerkProvider } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

// Оновлення рендерингу для React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </TransactionsProvider>
  </React.StrictMode>
);











