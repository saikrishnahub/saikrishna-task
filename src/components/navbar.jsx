import React from 'react';


const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">KRISH STORES</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a class="nav-link fw-bold " href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold " href="#">Products</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link fw-bold " href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold " href="#">contact</a>
            </li>
          </ul>
         <div className="button">
            <a href="#" className="btn btn-outline-primary"><i className="fa fa-sign-in me-1">Register</i>
            </a>
            <a href="#" className="btn btn-outline-success"><i className="fa fa-sign-in me-1">login</i>
            </a>


         </div>
    
        </div>
        </div>
      </nav>
    );

}

export default Navbar;