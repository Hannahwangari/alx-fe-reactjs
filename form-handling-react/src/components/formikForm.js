import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// validation schema with Yup
const RegistrationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div style={{ maxWidth: "300px" }}>
      <h2>Register (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik Registration:", values);
          alert("Registration successful (Formik)!");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: "grid", gap: "10px" }}>
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}