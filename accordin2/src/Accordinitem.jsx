import { useState } from "react"
function Accordinitem (props)
{

    const {title,content, isOpen, index ,update}= props

    return(
               <div>  
                        <h1>
                             <button onClick={() => update(index)}> {title} <span>{isOpen?  '-':'+'} </span> </button>

                        </h1>

                        {isOpen && <p>{content}</p>}
               </div>

    )
  }
export default Accordinitem ;
