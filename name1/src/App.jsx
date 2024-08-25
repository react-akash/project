import {useEffect, useState} from 'react'
import Child from './Child'
import './index.css'
import axios from 'axios'



function App()
{

  const [quote, setQuote] = useState('')
  const [author, setAuthor]= useState('')
  const [btnclick, setbtnClick]= useState(0)
  const [save,setsave]=useState([])
 


    useEffect(() =>{

  axios.get('https://dummyjson.com/quotes/random')
  .then((data) => {

       setQuote(data.data.quote)
       
       setAuthor(data.data.author) 

  })

    },[btnclick])


      function load()
      {
          setsave([...save,quote])
         

      }

      const remove = (id) => {

        save.splice(id, 1)
       setsave([...save])
     
       
      }

        
  
  return(

        <>  
             <div className='quatation'>
              <blockquote>quote  :  {quote}</blockquote>
              <cite> Author  :    {author}</cite>
<br/><br/>
             <button onClick={()=>setbtnClick(btnclick+1)}> Refresh</button>

            <button onClick={load}>Save</button>
               
                {save.map((ta,index)=>(

                    <Child quote={ta}  remove={remove} index={index}  key={index} />
                   ))
                  } 
          </div>

        </>



  )
}
  export default App;