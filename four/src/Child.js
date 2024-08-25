

import React from 'react'

 function Child( props) 
 {
     console.log(props)

  return (

            <div>
                 <p> my name is {props.nam} </p>
                 <p> my age is {props.age} </p>
      
              </div>
  )
}
  export default Child;
