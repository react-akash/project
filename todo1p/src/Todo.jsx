import React from 'react'

const Todo = (props) => {
  return (
    <div>
              <p> i,am child </p>
              <input type="text" onChange={(e) => props.Update(e.target.value)}/>

             <li key={props.index}> 
             {props.task} <button onClick={() => props.remove()}> clear </button>   </li>
    </div>
  )
}

export default Todo;
