import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrimeReactProvider } from 'primereact/api';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Evenement from './pages/Evenement'
import Source from './component/Source';
import Booking from './pages/Booking'
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/acceuil",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/evenements',
    element: <Evenement/>,
  }, 
  {
    path: "*",
    element: <NotFound/>,

  },
  {
    path: "/sources",
    element: <Source/>,
  },
  {
    path: "/booking",
    element: <Booking/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}>
        {/* <App /> */}
      </RouterProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);

reportWebVitals();

