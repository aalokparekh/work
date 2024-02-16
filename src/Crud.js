import { useState } from "react";

function CrudOp()
{
   const [name, setName] = useState("");
   const [alldata,setAlldata] = useState([]);
   const [show,setShow] = useState(false);
   const [edit,setEdit] = useState();
   const handleAdd=()=>
   {
      if(name.length !==0)
      {
         setAlldata(newData=>[...newData , name]);
         setName('');
      }
   }
   const DeleteData=(index)=>
   {
     alldata.splice(index,1);
     setAlldata([...alldata])
   }
   const handleEdit = (i) =>
   {
      setName(alldata[i]);
      setShow(true);
      setEdit(i);
   }
   const handleUpdate = () =>
   {
      alldata.splice(edit, 1, name);
      setAlldata([...alldata]);
      setShow(false);
      setName("");
   }
   return(
   <div className="App">
      <h1>Crud  Operations</h1>
      <br />
      <br />
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
      {!show ? <button onClick={handleAdd}>Add</button> :  <button onClick={handleUpdate}>Save</button>}
      {
         alldata.map((val,i)=>
         <div>
         <h3>{val}</h3>
         <button onClick={()=>handleEdit(i)}>Edit</button>
         <button onClick={()=>DeleteData(i)}>Delete</button>
         </div>
         )
      }
   </div>
   )
}
export default CrudOp;