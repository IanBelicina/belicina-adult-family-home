import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* Nav items go here */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="rooms/">Rooms</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about/">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="landing/">Landing Test</NavLink>
            </li>
            {/* Add more NavLink elements for additional navigation items */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
