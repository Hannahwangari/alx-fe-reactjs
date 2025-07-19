import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ NEW

function App() {
  return (
    <div>
      <Header />
      <MainContent />

      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys city life and technology" />

      {/* ✅ Add the Counter here */}
      <Counter />

      <Footer />
    </div>
  );
}

export default App;
