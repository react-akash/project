import Movie from './Movie'
import MoviesData from './data'
 function Movies()
{
     
    function print(name)
    {
      alert("button clicked"+name)
    }

  

    return(
              <div className='Movies'>
                     {MoviesData.map((n,index) =>(

                        n.rating>8.0 &&(

                        <Movie  url={n.image}  title={n.title} fun={print}>
                         
                         <p>{n.title}</p>
                        
                            </Movie>
                   

                    ) ))}
                       
              </div>
    )
}
  export default Movies