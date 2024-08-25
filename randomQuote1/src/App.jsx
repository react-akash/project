import { useEffect,useState } from "react";
import axios from 'axios'
import './App.css'

function App()
{

  const [content, setContent]= useState('')
  const [author, setAuthor] = useState('')
  const [btnclick, setbtnClick]= useState(0)
  const [save, setSave]= useState()

  

 
   

  useEffect(() =>{

    axios.get("https://api.quotable.io/random")
    .then((data)=>{

                     setContent(data.data.content)
                     setAuthor(data.data.author)
                    
                    
           

    } ,[btnclick])

  })


return(


<>

        <div className='quotation'>
            <blockquote> {content} </blockquote>
            <cite> {author} </cite> 
          
          
            <br/>
            <button onClick={()=> setbtnClick(btnclick+1)}>Refresh</button>  <nbsp/> 
         
         <button onClick={()=> setSave()}>add</button>
         </div>

</>
)

}

export default App;