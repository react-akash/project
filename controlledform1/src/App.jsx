import React from 'react'
import { useState } from "react"
import './App.css'
function App()
{
  const [fromDetails, setFormDetails]= useState({

    username: '',
    email:'',
    password:'',
    number: ''
    
  })
     const [formErrors, setFormErrors] = useState({


      
    username: '',
    email:'',
    password:'',
    number: ''
    
     }
)

     function change(e)
     {
          const {name,value}= e.target
          setFormDetails ({ ...fromDetails, [name]: value})
     }

     function submit(e)
     {
       e.preventDefault()
        if(fromDetails.password.length < 6)
        {
          setFormErrors({...formErrors , password:"please enter 6 character"})
        }
          console.log(fromDetails)

     }


  return(
           <div> 
           <form  onSubmit={submit} >
            <h1> Registration form</h1>
            <input type='text' name='username' id='us' placeholder='Enter The Name'  onChange={change}  />  <br/>  <br/> {formErrors.username && <p className="Error"> { formErrors.username }</p>  } 
           <input type='email' name='email' id='em' placeholder="Enter The email" onChange={change} />  <br/>  <br/>     {formErrors.email && <p className="Error"> {formErrors.email}</p>  } 
           <input type='password' name='password' id='pss' placeholder="Enter The Password" onChange={change} />  <br/>  <br/> {formErrors.password && <p className="Error"> { formErrors.password }</p>  } 
           <input type='number' name='number' id='num' placeholder="Enter The mobile Number" onChange={change} />  <br/>  <br/> {formErrors.number && <p className="rror"> { formErrors.number }</p>  } 
           
           <button> submit </button>
           

            </form>
    
</div>

  )
  }
    export default App;