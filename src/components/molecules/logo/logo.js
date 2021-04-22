import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';

function Logo() {
  return (
    <Link className="logo" to="/">
      <img className="logo--image"  alt=""/>
    </Link>
  );
}

export default Logo;
