import {useEffect, useState} from 'react'
import './App.css'

function App() {

  const [products, setProducts]= useState ([])
 
  useEffect(() =>
  {

    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    . catch((err) => console.assert.log("my error"+err))
    
    

    
  } ,[])
 
  return (
   <div>

      <h1> use effect demo- feaching products </h1>
      <div style= {{display: 'grid', gridTemplateColumns:'repeat(3,1fr)'}}>
      {products.map((pr,index) => (

<div  style= {{boxShadow: '5px 5px 5px black', backgroundColor:'blue'}}  key={index} >

           < img src= {pr.image} alt={pr.title} height="50" width= "50" / > 

           <h2>  {pr.title}</h2>  

      </div> 

      ))}
     </div>
    </div>
  )
}

export default App;
