import React from 'react'
import { Link } from 'react-router-dom'

function Header()
 {
  return (

    <header>

        <nav>
                  <button> <Link to='/home'> Home  </Link></button>
                  <button> <Link to='/About'> About  </Link></button>
                  <button> <Link to='/contact'> Contact  </Link></button>



        </nav>


    </header>
               
      
    
  )
}

export default Header
