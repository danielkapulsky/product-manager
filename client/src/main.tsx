import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/homepage/HomePage.tsx';
import ItemPage from './pages/itemPage/ItemPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <HomePage/>,
      },
      {
        path:"/:id",
        element: <ItemPage/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
