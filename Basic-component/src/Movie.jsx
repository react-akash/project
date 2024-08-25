

function Movie(props)
{
    return(
              <div>
                       <img src={props.url}  alt='movies'/>

                       <h2>{props.title}</h2>
                       <p>{props.children}</p>
                       <button onClick={()=>props.fun(props.title)}>see the movie</button>
              </div>
    )
}
 export default Movie;