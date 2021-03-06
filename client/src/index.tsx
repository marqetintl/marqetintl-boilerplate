import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import reportWebVitals from "./reportWebVitals";

import { Loading } from '@miq/componentjs';
import { SharedDataProvider } from '@miq/contextjs';

import './index.scss';

const StaffLayout = React.lazy(() => import('./staff/'));

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <SharedDataProvider>
        <Routes>
          <Route path="staff/*" element={<StaffLayout />} />
          {/* <Route path="/*"element={<Routes></Routes>}/> */}
        </Routes>
      </SharedDataProvider>
    </React.Suspense>
  );
};

const root = document.getElementById('root');

if (root)
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    root
  );

// reportWebVitals();
