import { Link } from "react-router-dom";

function NV(){
   return(
      <div>
         <Link to='/'>Home</Link>
         <Link to='/About'>About</Link>
         <Link to='/Team'>Team</Link>         
         <Link to='/*'>Contact</Link>         

      </div>
   )
}
export default NV;