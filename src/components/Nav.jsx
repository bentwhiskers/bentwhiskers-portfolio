import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/aboutme'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/resume'>Resume</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

