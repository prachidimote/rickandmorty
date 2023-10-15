import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'blue', // Set your desired text color
    fontWeight: 'bold', // Set your desired font weight
  };
  

  return (
    <div className='my-4 container-fluid h-10'>
      <i className='fas fa-bars open'></i>
      <i className='fas fa-bars close'></i>
     
      <ul className="flex font-semibold justify-end">
        <li className="mr-6">
        </li>
        <li className="mr-6">
          <NavLink to='/' style={linkStyle} activeClassName="active">
            Characters
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink to='/episodes' style={linkStyle} activeClassName="active">
            Episode
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink to='/location' style={linkStyle} activeClassName="active">
            Location
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
