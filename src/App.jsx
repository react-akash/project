import React from 'react'
import { useState } from 'react'
import "./App.css"
function App()
 {
                const [count,setcount] =useState(0)  
  

  return (

            <div >
                    <p> Count:{count}</p>
              <div className='count'>
                        <button onClick={()=> (count>24)? (count):setcount(count+1)}>➕</button>
                      <button onClick={()=> (count==0)?(count):setcount(count-1)}>➖</button>
                      <button onClick={()=>setcount(0)}>Reset</button>

              </div>

            </div>
  )
}

export default App
