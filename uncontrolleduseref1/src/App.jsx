import React,{useRef} from 'react'
import './App.css'
function App()
{

      const userenameref= useRef() 
     const emailref= useRef()
     const passwordref= useRef()

    
     function handlesubmit(e)
     {
         e.preventDefault()
         console.log (userenameref.current.value ,emailref.current.value, passwordref.current.value)

         


     }
     

  return(
      <div>
          <form onSubmit={handlesubmit}>
                   <h1>  Contact Form </h1>
                 <input type="text" name="username" id="us" placeholder="Enter The Name" ref={userenameref}/> <br/> <br/>
                 <input type="email" name="em" id="emi" placeholder="Enter The Email" ref={emailref}/>   <br/> <br/>
                 <input type="password" name="pwd" id="pa" placeholder="Enter The Password " ref={passwordref}/> <br/> <br/>
               <button>  submit </button>


          </form>
</div>

  )
}
export default App;