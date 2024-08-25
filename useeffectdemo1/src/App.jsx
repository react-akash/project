import {useEffect,useState} from 'react'

function App()
{

    const [count, setCount]  = useState(0)
    

    

    useEffect(() =>{
              
      console.log("hello")
     
    },[count])
  
  return(

          <div>
                
      <h1>  USE-Effect Demo Fetch </h1>
     
                <p> count:{count} </p>
                <button onClick={() => setCount(count+1)}> + </button>
              
               

                   
             
            
           
           </div> 
          

           


  )
}
 export default App;