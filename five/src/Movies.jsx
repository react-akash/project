import Movie from './Movie'
import MoviesData from '../data'


function Movies()
{
    function Print(name)
    {
        alert("button clicked" + name)
    }
    return(
              <div className='Movies' >

                { MoviesData.map((M) =>(
                <Movie url={M.image}
                          title={M.title }
                  />
              ))}

                </div>
    )
}
  export default Movies;