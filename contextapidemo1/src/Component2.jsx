import React, { useContext } from 'react'
import { mainContext } from './main'

function Component2()
{
    const count= useContext(mainContext)
    return(

        <div style={{height: '40vh', width:'40vw', border:'1px solid blue'}}>

<h4> Hi, I AM First </h4>

           

count inside is {count}


        </div>
    )
}
export default Component2