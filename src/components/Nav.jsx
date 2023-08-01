import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const currentURL = useLocation().pathname;
  return (
  <nav id='nav' className='container-fluid'>   
  <ul className="nav justify-content-end nav-tabs" id='mytabs'>
    <div className='row'>
      <div className='tab-pane col-sm-auto'>
        <li className="nav-item" id='L1'>
          <Link to="/" className={currentURL === "/" ? "nav-link active" : "nav-link"} aria-current="page">Erica Covington-Abbott</Link>
        </li>
      </div>
      <div className='tab-pane col-sm-auto'>
        <li className="nav-item" id='L2'>
          <Link to="/about" className={
                      currentURL === "/about" ? "nav-link active" : "nav-link"
                    }>
                      About Me
          </Link>
        </li>
      </div>
      <div className='tab-pane col-sm-auto'>
        <li className="nav-item" id='L3'>
          <Link to="/portfolio" className={
                      currentURL === "/portfolio" ? "nav-link active" : "nav-link"
                    }>
                      Portfolio
          </Link>
        </li>
      </div>
      <div className='tab-pane col-sm-auto'>
        <li className="nav-item" id='L4'>
          <Link to="/resume" className={
                      currentURL === "/resume" ? "nav-link active" : "nav-link"
                    }>
                      Resume
          </Link>
        </li>
      </div>
    </div>
  </ul>
  </nav>
    )
}

