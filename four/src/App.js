import Child from "./Child";

function App()
{

           
            let names=["Akash", "sanjay", "jay", "sai"]
            let ages= [22,23,24,25]
           
  return(
            <div>
              {names.map((n,index) =>
              (

               <Child nam={n} age={ages[index]} key={index} />)
              )}
              </div>
           

           
  )
}
  export default App;