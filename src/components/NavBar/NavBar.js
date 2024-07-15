import { Link } from "react-router-dom"
import './navbar.css'

export function NavBar() {
    return (
        <div className="navbar">
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to='/Business'>
                <button>Business</button>
            </Link>
            <Link to='/Entertainment'>
                <button>Entertainment</button>
            </Link>
            <Link to='/General'>
                <button>General</button>
            </Link>
            <Link to='/Health'>
                <button>Health</button>
            </Link>
            <Link to='/Science'>
                <button>Science</button>
            </Link>
            <Link to='/Sports'>
                <button>Sports</button>
            </Link>
            <Link to='/Technology'>
                <button>Technology</button>
            </Link>
        </div>
    )
}