// src/App.jsx
import React from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";   // ← import the context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />                      {/*  no more userData prop */}
    </UserContext.Provider>
  );
}

export default App;
