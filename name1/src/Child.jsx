import React from 'react'

function Child(props) {
  return (
    <div className='count'>
          

          <ol type="dot">
             {props.quote}
            {props.content}
          
              
        
                        <button onClick={()=>props.remove(props.index)}>❌</button> 
</ol>
                       
              </div>
             
   
  )
}

export default Child
