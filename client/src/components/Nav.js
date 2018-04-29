import React from 'react';
import NYTLogo from '../nyt.png'
//import {BrowserRouter} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText"></span>
      <div>
       <img src={NYTLogo} alt="times" />  
      </div>
      <br/>
      <NavLink to="/readinglist" exact>Your List Link</NavLink>
      <br/><br/>
    </div>
  )
}

export default Nav
