// Core
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'typeface-roboto-slab';

// CSS
import './index.css';

// Components
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

