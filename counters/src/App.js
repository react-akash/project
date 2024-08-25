import { useState } from "react";
import './App';
function Count()
{
   const  [C, setCount] = useState(0)

   function add()
   {
     
    setCount (C+1)
   
   }
  return(

      <div className="Count">
            <p> Count:{C} </p>


          

           <button onClick= {add}> + </button>
           <button onClick={()=> setCount(C-1)} >  - </button>
           <button onClick={()=> setCount(0)} > Reset </button>
          
            
            
        </div>
  )
  
}
export default Count;