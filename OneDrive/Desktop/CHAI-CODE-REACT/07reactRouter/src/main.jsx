import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
//import Github ,{ GithubLoader } from './components/Github/Github.jsx'

// const router=createBrowserRouter([

//   {
//     path:"/",
//     element:<Layout/>,/**kya render krega andar ke component */
//     children:[
//       {
//       path:"",
//       element:<Home/>
//       },

//       {
//       path:"about",
//       element:<About/>
//       },

//       {
//         path:"contact",
//         element:<Contact/>
//       }
//    ]

//   }


// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='user/:userid' element={<User/>}/>
       <Route
        path='github' 
        element={<Github/>}
        //loader={GithubLoader}
       />
    </Route>

  
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider   router={router}/>
  </React.StrictMode>,
)
