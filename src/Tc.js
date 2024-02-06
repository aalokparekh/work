function ct()
{
   const user=[
      {name :"Aalok" ,email :"aalok@gmail.com" ,id:"1"},
      {name :"Keyur" ,email :"keyur@gmail.com" ,id:"2"},
      {name :"Rinku" ,email :"rinku@gmail.com" ,id:"3"},
      {name :"Pankaj" ,email :"pankaj@gmail.com" ,id:"4"}
   ]

   return(
      <div>
      {
         user.map((item)=><user data={item}/>)
      }
      </div>
   )
}
export default ct;