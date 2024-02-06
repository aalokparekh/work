import React,{useState} from "react";


function Ss()
{
   const[value,setValue] = useState()

   function update()
   {
      sessionStorage.setItem('Car','BMW');
   }
   function remove()
   {
      sessionStorage.removeItem('Car');
   }
   return(
   <div>
   <h1>Session Storage</h1>
   <h1>{value}</h1>
   <button onClick={update}>Set Value</button>
   <button onClick={remove}>Remove</button>
   </div>
   )
}
export default Ss;