import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.scss';
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post('/api/auth/login', {
        email,
        password,
      });
      navigate('/'); 
    } catch (err) {
     
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    } else if (err.request) {
        // The client never received a response, and the request was never left
        console.log(err.request.data);
        console.log(err.request.status);
        console.log(err.request.headers);
    } else {
        // Anything else
    }
    
    }
   
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          email:
          <input name="email" type="email" placeholder="email" required />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;