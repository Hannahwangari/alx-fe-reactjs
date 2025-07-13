import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // ✅ Import here

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="Hannah"
        age="24"
        bio="Frontend Developer and tech enthusiast learning React!"
      />
      <Footer />
    </div>
  );
}

export default App;
