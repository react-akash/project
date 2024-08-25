import React from 'react'
import './App.css'
import { useState } from 'react';
function App()
{

    const [fromDetails, setFormDetails]= useState({

      username: '',
      email:'',
      password:''
    })
       const [formErrors, setFormErrors] = useState({


        
      username: '',
      email:'',
      password:''
       }
 )

    function change(e)
    {
         const{ name, value } =e.target
        
         setFormDetails({...fromDetails,[name]:value})
    }

    function submit(e)
    {
        e.preventDefault()

        if(fromDetails.password.length < 6)
        {
        
            setFormErrors({...formErrors, password:"please enter minimum 6 caracters"})
          
        }
        console.log(fromDetails)
    }
  return(

       <div>

        <h1> Contact form </h1>
      
      <form  className="myform" onSubmit={submit}> 
      <input type="text" name='username' id='us' placeholder='Enter The Name' onChange={change} /> {formErrors.username && <p className='error'>{formErrors.username}</p>} <br/> <br/>
      <input type='Email' name='email' id='em' placeholder='Enter The Email' onChange={change} /> {formErrors.email && <p className='error'>{formErrors.email}</p>} <br/> <br/>
      <input type="password" name="password" id='pss' placeholder='Enter The PassWord' onChange={change}  /> {formErrors.password && <p className='error'>{formErrors.password}</p>}<br/> <br/>
       <button> submit</button>

       </form>
      

       </div>


  )
}
 export default App;