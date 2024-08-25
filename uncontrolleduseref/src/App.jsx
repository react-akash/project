import React,{useRef} from 'react'
import './App.css'
function App()
{
        const userRef= useRef();
        const emailRef = useRef();
        const passwordRef = useRef();

        function handlesubmit(e)
        {
          e.preventDefault()
          console.log(userRef.current.value, emailRef.current.value, passwordRef.current.value)
        }

  return(

            <form onSubmit={handlesubmit}>
                  <input type='text' name='' id= 'us' ref={userRef} /> <br/>  <br/>
                  <input type='email' name='' id='em' ref={emailRef}/>  <br/>  <br/>
                  <input type='password' name='' id='pass' ref={passwordRef}/>  <br/>  <br/>
              <button type='submit'> submit</button>

              
            </form>



  )
}
 export default App;