
import Header from './component/Header.jsx'
import Movies from './pages/Movies.jsx'
import Footer from './component/Footer.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

import {Routes,Route} from 'react-router-dom'
function App()
{
   return (

              <div>


                   <Header/>
                 <Routes>

                  <Route 
                         path='/movies' element= {<Movies/>} /> 
                   <Route
                    path='/about' Component= {About} /> 
                   <Route
                    path='/contact' element= {Contact} />

                  
                  </Routes>

                   <Footer/>
                   

              </div>

   )
}
export default App;