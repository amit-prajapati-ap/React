import React, { Children } from 'react'
import Home from './components/Home'
import About from './components/About'
import Layout from './Layout'
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Routes, Route } from "react-router-dom"
import Contact from './components/Contact'
import User from './components/User'
import Github, { githubInfoLoader } from './components/Github'

//Method 1 :
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       }, {
//         path: 'about',
//         element: <About/>
//       }, {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:id' element={<User/>}></Route>
      <Route loader={ githubInfoLoader } path='github' element={<Github/>}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

