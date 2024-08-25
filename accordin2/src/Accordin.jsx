import {useState} from 'react'
import Accordinitem from './Accordinitem'
function Accordin(props)
{
        const[open,setOpen]= useState('false')
        const[openindex, setOpenIndex]= useState('')

    function update(index)
{
    
        setOpenIndex(index)
    }
         
    return(
             <div>

              {props.item.map((obj ,index) =>(

                < Accordinitem  title={obj.title} content={obj.content} isOpen={ openindex===index} update={update} index={index} key={index} />
    

              ))}
              
</div>
              


    )
}
  export default Accordin;