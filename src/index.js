// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    if (rootEl) {
        createRoot(rootEl).render(<App />);
    }
});
