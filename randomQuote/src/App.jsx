import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App()
{

  const [quote, setQuote] = useState('')
  const [author, setAuthor]= useState("")
  const [btnclick, setbtnClick]= useState(0)

    useEffect(() =>{

  axios.get("https://api.quotable.io/random")
  .then((data) => {

       setQuote(data.data.content)
       
       setAuthor(data.data.author)

  })

    },[btnclick])

    function UpdateQuote()
    {
        setInterval(()=>{

               setbtnClick(btnclick+1) 
        },5000 )
    }
     UpdateQuote();
  return(

        <>


           
             <div className='quotation'>

              <blockquote>{quote}</blockquote>
              <cite>{author}</cite> <br/>
              <button onClick={()=> setbtnClick(btnclick+1)}> Refresh </button>
              


             </div>
            

        </>



  )
}
  export default App;