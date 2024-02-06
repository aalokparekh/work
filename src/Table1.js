import React from "react";
import Table from 'react-bootstrap/Table';

function Ab()
{
   const list = [
   {id : "01",name : "Rinku" },
   {id : "02",name : "Aalok"},
   {id : "03",name : "Keyur"},
   {id : "04",name : "Pankaj"}
]
   return(
      <div>
         <Table striped hover bordered  >
         {
            list.map((items)=>
            <tr>
               <td>{items.id}</td>
               <td>{items.name}</td>
            </tr>
               )
         }
         </Table>
      </div>
   )
}
export default Ab ;