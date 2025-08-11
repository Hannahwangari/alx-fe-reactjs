import React from "react";
import "./index.css";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <UserProfile />
    </div>
  );
}

export default App;
