import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links: <a href="https://react.dev/"></a></p>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Team'>Team</Link>
        </div>
    )
}
export default NotFound;