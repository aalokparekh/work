import React from "react";

class Pc extends React.PureComponent
{
   constructor()
   {
      super();
      this.state={count :1}
   }
   render()
   {
      console.warn("Rendering");
      return(
      <div>
         <h1>Pure Component {this.state.count}</h1>
         <button onClick={()=>this.setState({count:this.state.count})}>Update Data</button>
      </div>
      )
   }
}
export default Pc;