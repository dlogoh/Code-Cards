import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import "../styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  // Redirect if authenticated
  if (localStorage.token) {
    return <Navigate to='/dashboard' replace={true} />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match!");
    } else {
      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        console.log("hello?");

        const body = JSON.stringify(newUser);
        console.log("so far so good");

        const res = await axios.post(
          `http://localhost:5000/api/users`,
          body,
          config
        );

        console.log(res.data);

        localStorage.setItem("token", res.data.token);

        setAuthToken(res.data);
      } catch (error) {
        console.error(error);
        console.log("An error happened in try catch block");
      }
    }
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
        <br />
      </div>
    </>
  );
};

export default SignUp;
