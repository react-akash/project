import React from 'react'

function Movie(props) {


    return (
                <div>
                   
                   
                      <img src= {props.task} alt="vv"/>

                      <p>{props.url}</p>
                      <p> Rating:{props.rat}</p>
                     
                      <button onClick={() => props.fun(props.url)}>see the movie</button>
                
                </div>

                
  )
}

export default Movie
