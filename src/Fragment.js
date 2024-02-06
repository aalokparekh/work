import React, { Fragment } from "react";
function Fg()
{/*
   return(
   <React.Fragment>
         <table>
         <tbody></tbody>
         <tr><td>Hello Fragment</td><td>Hello Fragment</td></tr>
         </table>
   </React.Fragment>
   )
      return(
         <>
         <table>
         <tbody></tbody>
         <tr>
         <td>Hello Fragment</td>
         <td>Hello Fragment</td>
         </tr>
         </table>
         </>
      )*/

      return(
         <Fragment>
         <table>
            <tbody>
            <tr>
               <td>Hello Fragment!!!!!</td>
               <td>Hello Fragment!!!!!</td>
            </tr>
            </tbody>
         </table>
         </Fragment>
      )

}
export default Fg;