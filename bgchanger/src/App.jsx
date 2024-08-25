
import {useState} from 'react';
import './App.css'
function App()
{ 
  const  [background, setBackground] = useState("00000f")
 function Change()
  {  
  console.log(Math.round(Math.Random() * 10000000).toString(16))
 const Random_color = "#" + Math.round(Math.random() * 10000000)

    console.log (Random_color)
    
    setBackground(Random_color)

}
  return(
          <div className="changer" style={{backgroundcolor:background}}> 

            <button onClick={Change}> change </button>

            </div>
  )
}
export default App;