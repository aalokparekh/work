import { Link } from "react-router-dom"
function About() {
    return (
        <div>
            <h1>About Page</h1>

            <Link to='/'>Home</Link>  &nbsp;&nbsp;
            <Link to='/About'>About</Link>  &nbsp;&nbsp;
            <Link to='/Employees/two'>Employees</Link>   &nbsp;&nbsp;
            <Link to='/*'>Contact</Link>  &nbsp;&nbsp;



        </div>
    )
}
export default About
