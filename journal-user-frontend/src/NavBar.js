// import React from "react";

// export default function NavBar() {
//     return (
//         <div>

//             <nav class="navbar bg-body-tertiary">
//                 <div class="container-fluid">
//                     <span class="navbar-brand mb-0 h1">Navbar</span>
//                 </div>
//             </nav>
//         </div>
//     )
// }

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "./authentication/AuthContext";


const MainHeader = ({}) => {
  const location = useLocation();
  const {logout} = useAuth();

  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Journal App</h2>
      <nav>
        <Link to="/layout" style={getLinkStyle(location.pathname === '/layout')}>Notes</Link>
        <Link to="/dashboard" style={getLinkStyle(location.pathname === '/dashboard')}>Dashboard</Link>
        
        <Link to="/login" onClick={logout} style={styles.logout}>Logout</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#7D5943',
    color: '#C4A484',
  },
  logo: {
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: 'bold',
  },
  logout: {
    marginLeft: '20px',
    background: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

const getLinkStyle = (isActive) => ({
  ...styles.link,
  borderBottom: isActive ? '2px solid white' : 'none',
});

export default MainHeader;
