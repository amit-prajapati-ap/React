import React, { Children } from 'react'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Courses from './components/Courses'
import MockTests from './components/MockTests'
import Reports from './components/Reports'
import NotFound from './components/NotFound'
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom"
import NavigationBar from './components/NavigationBar'
import ParamComp from './components/ParamComp'

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Home/>
        <NavigationBar/>
      </div>
    },
    {
      path: "/about",
      element: <div>
        <About/>
        <NavigationBar/>
      </div>
    },
    {
      path: "dashboard",
      element: <div>
        <Dashboard/>
        <NavigationBar/>
      </div>,
      children: [
        {
          path: "courses",
          element: <Courses/> 
        },
        {
          path: "mock-tests",
          element: <MockTests/>
        },
        {
          path: "reports",
          element: <Reports/> 
        }
      ]
    },
    {
      path: "/student/:id",
      element: <div>
        <ParamComp/>
        <NavigationBar/>
      </div>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]
)

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App

