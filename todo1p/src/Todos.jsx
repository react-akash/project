import {useState} from "react"
import React from 'react'
import Todo from "./Todo"

 function Todos()
  {
    const [values, setValues] = useState([])
   const [value, setValue] = useState('')
   const [dummytext, setDummyText] = useState('dummy')
 
   
   function add() 
   {
         setValues([... values, value ])
         setValue('')
   }
         function remove(id)
         {
               values.splice(id,1)
               setValues([...values])
         }
           function Update(text)
           {
              setDummyText(text)
           }
    


  return (
              
           <div>
           <div>
                  <input type="text" value={value} onChange={(e) => setValue(e.target.value)}  / > 
                  
                 <button onClick={add} > click </button >   
                
           </div>
                   
                {dummytext} 
                    <ul>
                           {values.map((t,i) =>(

                                <Todo task={t} index={i} remove={remove} Update= {Update} key={i} />

                                ))} 

                    </ul>
                         

                 
       </div>

  )
}
export default  Todos;