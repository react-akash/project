import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Movies () 

{
      const [movies,setMovies]= useState([])
      
      

      function handleDelete(id)
      {
          axios.delete(`http://localhost:3000/movies/${id}`)
          .then((res) => {
                              let newMovies= movies.filter((m)=>m.id!==id);
                              setMovies(newMovies)
            
          })}

    useEffect(() => {

        axios.get("http://localhost:3000/movies")
        .then((data)=> setMovies(data.data))

    },[])

    function handlePost(PostData)
    {
      axios.post("http://localhost:3000/movies,PostData")
      .then((data) => setMovies((data.data)))
    }
          
  return (
            <div className='grid grid-cols-3 place-item-center'>
                       {movies && movies.map((m,index) =>(

                        <div className='movie p-10 bg-white text-black rounded rounded-3 flex flex-col' key={index}>

                            <img src= {m.poster} alt='{m.Title}' height="100" width="100"/>

                          <h2> {m.Title} </h2>
                          <p>year:{m.year}</p>

                          <button> ✏️ </button>
                          <button onClick={()=>handleDelete(m.id)}>❌ </button>


                        </div>

                       ))}
                    
            </div>
  )
}

export default Movies
