import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import './i18next';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div className="w-100 h-100 d-flex justify-content-center align-items-center">Loading ~~~~</div>)} >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
