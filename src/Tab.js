import React from "react";
function Tab()
{
   const arr=["Aalok","Keyur","Rinku","Pankaj"]
   return(
      arr.map((items)=>
      {
         console.log(items)
      })
   )
}
export default Tab;