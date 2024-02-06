import { useRef } from "react";

function Ur()
{
   let name =useRef(null);

   function update()
   {
      console.warn("Function calling");
      name.current.value="ABCD2";
      name.current.style.color="red";
      name.current.style.backgroundColor="green";
   }
   return(
   <div className="App">
      <h2>UseRef Hook In React</h2>
      <input type="text" ref={name}></input>
      <button onClick={update}>check ref</button>
   </div>
   )
}
export default Ur;