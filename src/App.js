import './App.css';
import FormikForm from './FormikForm';
import FormikForm2 from './FormikForm2';

function App() {
  return (
    <div className="App">
      {/* In this Component i used Formik and Yup in one file  */}
      <FormikForm />
      {/* In this Component I used Formik and Yup in separate file */}
      {/* <FormikForm2 /> */}
    </div>
  );
}

export default App;
