import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
  </nav>
)

export default NavBar;