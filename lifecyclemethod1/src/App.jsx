import React, {Component} from 'react'

class App extends Component {

  constructor()
  {
        super();
        console .log("Click Here to Apply")

       this. state = {

               count:0
       }
  }

  componentDidMount()
  {
     console.log (" Read All Information  CareFully And Apply ")
  }
  
    shouldComponentUpdate()
    {
         console.log(" You'r Applied Wait for Responce  ")
         return true;
    }
     getSnapshotBeforeUpdate()
     {
        console.log("you'r Applied  ")
     }
      componentDidUpdate()
      {
         console.log(" Sucessfully App lied Thank You")
      }
  render()
  {
    return(

            <div>
                   <p> count:{this.state.count} </p>

                   <button onClick={() => this.setState((state) =>{
                    return(

                           {count:state.count+1}
                    )

                    
                   })}> ➕ </button>


            </div>

      
    )
  }


}
  export default App;