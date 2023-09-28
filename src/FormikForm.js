/* In this file we used Formik for form handling and Yup for form validation both are used in 
one file */
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

function FormikForm() {
    const [formData, setFormData] = useState({});
  const NewValidations = yup.object({
    name: yup.string().required("Name is Must"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Enter Strong Password"
      )
      .required("Password Is Must"),
    age: yup.number().min(10).max(50).required("Age is Must"),
    gender: yup.string().required("Gender is Must"),
    country: yup.string().required("Country is Must"),
    hobby: yup.array().min(1, "1 Hobby is Must"),
    comment: yup.string().max(500).required("Comment is Must"),
  });
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Form</h1>
      <Formik
        validationSchema={NewValidations}
        initialValues={{
          name: "",
          email: "",
          password: "",
          age: "",
          gender: "",
          hobby: [],
          country: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log("Form values:", values);
          setFormData(values);
        }}
      >
        <Form>
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
            }}
          >
            <tbody>
              <tr>
                <td>
                  <label>Name: </label>
                </td>
                <td>
                  <Field type="text" name="name" />
                  <br />
                  <ErrorMessage name="name">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email: </label>
                </td>
                <td>
                  <Field type="email" name="email" />
                  <br />
                  <ErrorMessage name="email">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password: </label>
                </td>
                <td>
                  <Field type="password" name="password" />
                  <br />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Age: </label>
                </td>
                <td>
                  <Field type="number" name="age" />
                  <br />
                  <ErrorMessage name="age">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender: </label>
                </td>
                <td>
                  <label htmlFor="">Male</label>
                  <Field type="radio" name="gender" value="Male" />
                  &nbsp;
                  <label htmlFor="">Female</label>
                  <Field type="radio" name="gender" value="Female" />
                  <br />
                  <ErrorMessage name="gender">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">Hobbies:</label>
                </td>
                <td>
                  <label htmlFor="">Writing</label>
                  <Field type="checkbox" name="hobby" value="Writing" />
                  &nbsp;
                  <label htmlFor="">Reading</label>
                  <Field type="checkbox" name="hobby" value="Reading" />
                  &nbsp;
                  <label htmlFor="">Sleeping</label>
                  <Field type="checkbox" name="hobby" value="Sleeping" />
                  <br />
                  <ErrorMessage name="hobby">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">Country: </label>
                </td>
                <td>
                  <Field name="country" as="select">
                    <option value="">Select</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </Field>
                  <br />
                  <ErrorMessage name="country">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="">Comments: </label>
                </td>
                <td>
                  <Field as="textarea" name="comment" />
                  <br />
                  <ErrorMessage name="comment">
                    {(msg) => (
                      <div style={{ color: "red", fontWeight: "bold" }}>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
 {/* <h1>{JSON.stringify(formData)}</h1> */}
      {/* <h1>{formData.name}</h1>
      <h1>{formData.age}</h1> */}
      <div>
       <h1>Form Data Output</h1>
       {JSON.stringify(formData)}
      </div>
    </div>
  );
}

export default FormikForm;
