import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useAuth } from './auth';
import { useForm, Controller } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import "./Login.css"

export const Login =()=>{
  const [user,setUser] = useState('');
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const auth = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    
    const handleLogin = () =>{
        auth.Login(user);
    }
    function login() {
    }
    const onLoginSuccess = (res) => {
      console.log("onloginsuccess"+res)
    };

  return (
    <div className="login">
    <div className="auth-options">
      <h1 className="heading">Sign in.</h1>
      <div className="input_1">
        <input
          type="email"
          placeholder="Email"
          className="input_email"
          value={userEmail}
          onChange={(e) => {
            setuserEmail(e.target.value);
          }}
        />
      </div>
      <div className="input_2">
        <input
          type="password"
          placeholder="Password"
          className="input_password"
          value={userPassword}
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button className="signin_btn" onClick={login}>
          Sign in
        </button>
      </div>
      <p className="new_account">
        Don't have an account?
        <a href="/register" className="redirect_register">
          Create Account
        </a>
      </p>
    </div>
  </div>
  )
}


