import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'


const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('../')
    setUser(null);
    window.location.reload(false);
  }
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [location])





  return (
    <nav style={{ backgroundColor: "#ebb13471" }} className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        
        <Link to="/"  className="navbar-brand fw-bold fs-4" >Employee Finder</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>

            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/profile">Create Profile</Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/my-profile">My Profile</Link>
              {/* onClick={() => { navigate(`/my-profile/${userId}`) }} */}
            </li>

          </ul>


          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              {localStorage.getItem("profile") === null ? (
                <Link className="text-white btn btn-warning" to="/login">Log In to Your Profile</Link>
              ) : (
                <button onClick={logout} className="nav-link btn btn-danger btn-sm text-white" >Logout</button>
              )}
            </li>
          </ul>



          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

        </div>
      </div>
    </nav>

  )
}

export default Navbar