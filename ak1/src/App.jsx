import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Movies from './pages/Movies.jsx'
import Movie from './pages/Movie.jsx'
import {Routes,Route} from 'react-router-dom'


 function App() {
  return (
    <div>
           
             <Header/> 
            

             <Routes>

             <Route path= '/' element={<Movies/>}> </Route>
             <Route path='/Movie' element={<Movie/>}></Route>
             <Route path='/about' Component={About}></Route>
             <Route path='/Contact' Component={Contact}></Route>
             <Route path='*' element={<page not found/>}></Route>
             
          
          
           
             

             </Routes>
          
           
             <Footer/> 
    </div>
  )
}
 export default App
