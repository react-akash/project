import Movie from "./Movie"
import Moviesdata from "./data"
import "./App.css"
function Movies()
{

    function print(name)
    {
        alert("button clicked  "  + name);
    }
 
    return(
             
        <div className="change">

                {Moviesdata.map((m,i)=>(

            <Movie task={m.images} url={m.title} index={i} key={i} rat={m.rating} fun={print}/>

                ))}

              



        </div>
    )
}
  export default Movies