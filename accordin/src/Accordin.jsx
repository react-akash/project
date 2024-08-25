import React,{useState} from 'react'
import Accordinitem from './Accordinitem'
const Accordin = (props) => {

    const [open, setOpen] = useState('false')
    const [openIndex, setOpenIndex] =useState('0')
    const update=(index)=>{

       setOpenIndex(index)
    }
    
  return (
    <div>

            {props.item.map((obj,index) => (


            <Accordinitem title= {obj.title}  content={obj.content} isOpen={openIndex===index} update={update}  key={index} index={index}/>


        ))}

    </div>
  )
}

export default Accordin
