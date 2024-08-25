
import Movies from './ Component/Movies'
import { Component } from 'react'



class App extends Component
{
  render()
  {
    return(
             <div className= 'app'>
              <h1> Hello Word </h1>
            < Movies/>
           
             </div>
    )
  }
}
     export default App