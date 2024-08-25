import React from 'react'
import { Link } from 'react-router-dom'

function Header()
 {
  return (

    <header>

        <nav>
                  <button> <Link to='/home'> Home  </Link></button> <nbsp/>
                  <button> <Link to='/About'> About  </Link></button>  <nbsp/>
                  <button> <Link to='/contact'> Contact  </Link></button> <nbsp/>



        </nav>


    </header>
               
      
    
  )
}

export default Header
