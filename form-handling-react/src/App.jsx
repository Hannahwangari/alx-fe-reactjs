import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "20px", display: "flex", gap: "40px" }}>
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;