import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import Spinner from './app/shared/spinner';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import './i18next';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div className="spinner">Loading~</div>)} >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
