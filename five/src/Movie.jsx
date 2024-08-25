function Movie( props)
{
    
    return(
                 <div className="Movie">
                   <img 
                   src= {props.url} 
                    alt='Movies'
                    />
                   <h2> {props.title}</h2>
                   <p> props. children </p>

                    </div>
    )
}
  export default Movie;