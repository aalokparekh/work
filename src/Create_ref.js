import { createRef } from "react";
import React from "react";
class Cr extends React.Component
{
   constructor()
   {
      super();
      this.InputRef=createRef();
   }
      componentDidMount()
      {
         console.warn(this.InputRef.current.Value="")
      }
         getValue()
         {
            console.error(this.InputRef.current.value ="ABCD");
            this.InputRef.current.style.color="red";
            this.InputRef.current.style.backgroundColor="orange";
         }

   render()
   {
      return(
         <div className="App">
         <h1>Create Ref In React </h1>
         <input type="text" ref={this.InputRef}></input>
         <button onClick={()=>this.getValue()}>Check Ref</button>
         </div>
      )
   }
}

export default Cr;