
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '200px',
        padding: '20px',
        background: 'linear-gradient(to bottom, lightblue, green)',
        borderRadius: '0 8px 8px 0',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Nav className="flex-column" style={{ flexGrow: 1 }}>
        <Nav.Link as={Link} to="/" style={{ fontSize: '28px',fontweight: 'bold',color: 'purple' }}>Home</Nav.Link>
        <Nav.Link as={Link} to="/products" style={{ fontSize: '28px',fontweight: 'bold',color: 'purple' }}>Products</Nav.Link>
        <Nav.Link as={Link} to="/about" style={{ fontSize: '28px',fontweight: 'bold',color: 'purple' }}>Aboutus</Nav.Link>
        <Nav.Link as={Link} to="/contact" style={{ fontSize: '28px',fontweight: 'bold',color: 'purple' }}>Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidenav;
