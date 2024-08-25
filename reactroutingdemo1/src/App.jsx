import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages.jsx/Home';
import Contact from './pages.jsx/Contact';
import NotFound from './pages.jsx/NotFound';
import Header from './pages.jsx/Header';
import './App.css'

function App ()
{

  return(

      <div>
        <Header/>
               <Routes>
              <Route

                path='/home'
                element= {<Home/ > } >   </Route>
             
                <Route

                path='/contact'
                element= {< Contact/ >} >   </Route>
               
               <Route

                path='*'
                element= {< NotFound/ >} >   </Route>


      </Routes>
     
     </div>

  )
}
  export default App;