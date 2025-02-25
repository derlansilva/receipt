import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <img src="/logo.png"
            className="me-2"
            style={{ width: '200px', height: '50px', objectFit: 'cover' }}/>
        <nav>
          <a href="#profile" className="text-white me-3">
            Profile
          </a>
          <a href="#logout" className="text-white">
            Logout
          </a>
        </nav>
      </div>
    


  );
};

export default Header;
