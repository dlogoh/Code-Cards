import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    console.log("hello world");
  };

  return (
    <>
      <div className='container'>
        {/* Alert Goes Here!! */}
        <h2 className='signup-header'>Log In</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='example@email.com'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button type='submit' className='form-btn'>
            Sign Up
          </button>
        </form>
        <h4>
          Don't have an account?{" "}
          <Link to='/signup' className='text-primary'>
            Sign Up
          </Link>
        </h4>
        <br />
      </div>
    </>
  );
};

export default SignUp;
