import {useState} from "react"
import './App.css'
 function App()
{
     const [values , setValues]= useState([])
     const [value , setValue]= useState('')

     function add()
     {
       setValues([... values, value]);
       setValue('')
     }

     function remove(id)
     {
           values.splice(id,1)
           setValues([values])
     }
  return(
            <div className="web">

               <div> 
                    <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button  onClick={add}> click </button>
                  
                 </div>

                 <div>

                          
                                  <ul>
                                         { values.map((t, i) => (

                                          <li key={i} > 
                                          {t} <button onClick={()=> remove(i)}> delete </button>
                                           </li>
                                           
                                         ))}

                                         </ul>
                                  
               </div>  
        </div>
  )
}
  export default App;