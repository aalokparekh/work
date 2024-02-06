/*Lifting StateUp (child To Parent)*/
import React from "react";

function Child(props)
{
   const people= " Aalok "; 

   return(
   <React.Fragment>
   <h1>Trader : {props.data} </h1>
   <button onClick={()=>props.name(people)}>Click</button>
   </React.Fragment>
   )
}
export default Child;