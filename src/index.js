// Core
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'typeface-roboto-slab';

// CSS
import './index.css';

// Components
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
