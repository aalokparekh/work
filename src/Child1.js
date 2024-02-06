/* Parent To Child */
import React from "react";

function Child(props)
{
   const{name,getData}=props;
   return(
   <React.Fragment>
   <h1>G.O.A.T {props.name}</h1>
   <button onClick={getData}>click</button>
   </React.Fragment>
   )
}
export default Child;