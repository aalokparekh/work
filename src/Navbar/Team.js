import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
function Team() {

    const params = useParams();
    const { name } = params;
    console.log(name);
    return (

        <div>
            <h1> Employeees Page </h1>

            <Link to='/'>Home</Link>  &nbsp;&nbsp;
            <Link to='/About'>About</Link>  &nbsp;&nbsp;
            <Link to='/Employees'>Employees</Link>   &nbsp;&nbsp;
            <Link to='/*'>Contact</Link>  &nbsp;&nbsp;

            <br></br>
            <br></br>

            <li><Link to='/Employees/one'>Employee One</Link></li>
            <li><Link to='/Employees/two'>Employee Two</Link></li>

        </div>

    )
}
export default Team