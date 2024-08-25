import {  useContext,useState } from "react"
import { mainContext } from './main'
import Component from "./Component"

function App()
{

  

  const [value, setValue]= useState(0)

  return(
    <div>
<div>
        
<button onClick={() => setValue(value+1)}> ➕ </button>  

</div>
<br/> <br/>

<div style={{height: '70vh', width:'70vw', border:'1px solid blue'}}>
           
           <h4> Hi, I AM Fourth </h4>

           <mainContext.Provider value={value}>

          <Component/>

</mainContext.Provider>
</div>

</div>

  )
}

export default App;