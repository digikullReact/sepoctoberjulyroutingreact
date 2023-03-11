import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Founder from './components/Founder';
import ClassComp from './components/ClassComp';
import Funccomp from './components/Funccomp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/class",
    element:<ClassComp/>,
  },

  {
    path: "/function",
    element: <Funccomp/>,
  },
  {
    path: "/about",
    element: <About/>,
    children:[
      {
        path: "founder",
        element: <Founder/>,
      },
    ]
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/careers",
    element: <Career/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
