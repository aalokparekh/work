import { useRef } from "react";

function Ls()
{
   const data=useRef();
   const Hc=()=>
   {
      console.log(data.current.value);
      localStorage.setItem("Name",data.current.value);
   }
   console.log(localStorage.getItem(("Name"),"******"));
   return(
      <div className="App">
         <input type="text" ref={data}></input>
         <button onClick={Hc}>Click</button>
      </div>
   )
}
export default  Ls;