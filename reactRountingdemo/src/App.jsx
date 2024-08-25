import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';

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