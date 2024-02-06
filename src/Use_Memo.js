import { Fragment, useMemo, useState } from "react";

function Memo()
{
   const[count,setCount]=useState(0);
   const[item,setItem]=useState(10);

   const Police=useMemo(
      function Pmemo()
      {
         console.error("Memo Calling");
         return count*2;
      },[count]
   )
   return(
   <Fragment>
      <h1>Use Memo</h1>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h3>{Police}</h3>
      <button onClick={()=>setCount(count +5)}>Count</button>
      <button onClick={()=>setItem(item *10)}>Item</button>

   </Fragment>
   )
}
export default Memo;