import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    return (
        <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Main</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About Me</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Portfolio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Resume</a>
  </li>
</ul>
    )
}

