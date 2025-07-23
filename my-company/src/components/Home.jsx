import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to My Company</h1>
      <p>Your trusted partner in adventure and service.</p>
      <img
        src="https://source.unsplash.com/800x300/?nature,travel"
        alt="Welcome"
        style={{
          width: '100%',
          borderRadius: '10px',
          marginTop: '1rem'
        }}
      />
    </div>
  );
}

export default Home;
