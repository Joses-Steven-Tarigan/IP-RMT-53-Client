import ReactDOM from "react-dom/client"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PubHome from './pages/PubHome.jsx'
import Navbar from "./component/Navbar.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"





const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    
    <PubHome/>
    </>
  },
  {
    path: "/register",
    element: <>
    <Navbar/>
    <Register/>
    </>
  },
  {
    path: "/login",
    element: <>
    <Navbar/>
    <Login/>
    </>
  },
  {
    path: "/home",
    element: <>
    <Navbar/>
    <Home/>
    </>
  },
  

  
  

])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router= {router} />
  
)
