import { useFormik } from 'formik'
import React from 'react'
import { FormSchema } from './FormSchema';

function FormikForm2() {

    const formInitialValues = {
        name:'',
        email:'',
        age:'',
        pass:'',
        cpass:''
    } 
    // const formik = useFormik({
    //     initialValues: formInitialValues,
    //     onSubmit: (values) => {
    //         console.log(values);
    //         console.log(values.name);
    //         console.log(values.email);
    //     }
    // });
    const {handleSubmit, handleChange,handleBlur,touched, values, errors} = useFormik({
        initialValues: formInitialValues,
        validationSchema: FormSchema,
        onSubmit: (values, action) => {
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            console.log(values.pass);
            console.log(values.cpass);
            action.resetForm();
        }
    });

  return (
    <div>
      <h1>Formik Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input type="text" name='name' onBlur={handleBlur} onChange={handleChange} value={values.name} />
        <br />
        { errors.name && touched.name 
        ? (<span style={{color:'red'}}>{errors.name}</span>) 
        : null }
        <br /><br />
        <label htmlFor="">Enter Email: </label>
        <input type="text" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} />
        <br />
        { errors.email && touched.email 
        ? (<span style={{color:'red'}}>{errors.email}</span>) 
        : null }
        <br /><br />
        <label htmlFor="">Enter Age: </label>
        <input type="text" name='age' onBlur={handleBlur} onChange={handleChange} value={values.age} />
        <br />
        { errors.age && touched.age 
        ? (<span style={{color:'red'}}>{errors.age}</span>) 
        : null }
        <br /><br />
        <label htmlFor="">Enter Password: </label>
        <input type="text" name='pass' onBlur={handleBlur} onChange={handleChange} value={values.pass} />
        <br />
        { errors.pass && touched.pass 
        ? (<span style={{color:'red'}}>{errors.pass}</span>) 
        : null }
        <br /><br />
        <label htmlFor="">Enter Confirm Password: </label>
        <input type="text" name='cpass' onBlur={handleBlur} onChange={handleChange} value={values.cpass} />
        <br />
        { errors.cpass && touched.cpass 
        ? (<span style={{color:'red'}}>{errors.cpass}</span>) 
        : null }
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormikForm2