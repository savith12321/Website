import React from 'react'
import Navlink from './Navlink/Navlink';
import Navbrand from './Navbrand/Navbrand';
import Togglebutton from './Togglebutton/Togglebutton';
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Navbrand />
          <Togglebutton />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex">
                <Navlink title="About" url="about"/>
            </ul>
          </div>
        </div>
    </nav>
    )
}

export default Navbar
