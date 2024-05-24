import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Layout from './Layout';
import Home from './components/Home/Home'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contact' element={<Contact />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
