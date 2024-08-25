import './App.css'
import Movies from './Movies';
import Form from './Form';
import { useState } from 'react';
function App()
{


  const [formopen, setFormOpen]= useState(false)

   const openForm = () =>
   {
     setFormOpen(true)
   }

   const closeForm=()=>
   {
        setFormOpen(false)
   }
  return(
            <> 
                 <button className='p-5 bg-neutral-50 text-black hover:bg-blue-500 hover:text-white ' onClick={openForm}> Add new </button>
                <div className='bg-black text-white h-100 p-10'>
                            
                            <Movies/>
                           <Form isopen={formopen} onclose={closeForm}/>
                          </div>
              </>
          
    
  )
}
export default App;


