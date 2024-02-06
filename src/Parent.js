/*Lifting StateUp (child To Parent)(App.js ma parent ne call)*/
import React from "react";
import Child from "./Child";

function Parent()
{
   function ParentAlert(data)
   {
      alert(data);
   }
   return(
   <React.Fragment>
   <h1>Lifting StateUp</h1>
   <Child name={ParentAlert} />
   </React.Fragment>
   )
}