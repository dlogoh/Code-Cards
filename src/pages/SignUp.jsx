import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    console.log("hello world");
  };

  return (
    <>
      <div className='container'>
        {/* Alert Goes Here!! */}
        <h2 className='signup-header'>
          Create an account and save your snippets today!
        </h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
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
          <div className='form-control'>
            <label htmlFor='password2'>Verify Password</label>
            <input
              type='password'
              id='password2'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button type='submit' className='form-btn'>
            Sign Up
          </button>
        </form>
        <h4>
          Already have an account?{" "}
          <Link to='/login' className='text-primary'>
            Log In
          </Link>
        </h4>
      </div>
    </>
  );
};

export default SignUp;
