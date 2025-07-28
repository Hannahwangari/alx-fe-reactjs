import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      textAlign: 'center',
      borderTop: '1px solid #ddd',
      position: 'relative',
      bottom: 0,
      width: '100%',
      marginTop: '2rem'
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
