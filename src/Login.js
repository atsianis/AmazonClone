import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import {auth} from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
        .then ( (auth)=> {
          history.push('./');
        })
        .catch(error => alert(error.message));

  }

  const register = (event) => {
      auth.createUserWithEmailAndPassword(email, password)
        .then( (auth)=> {
          console.log(auth);
          if (auth) {
            history.push('./')
          }
        })
        .catch( error=> alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg"
          alt="Amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <label for="email">E-mail</label>
          <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />

          <label for="password">E-mail</label>
          <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />

          <button className="login__signInButton" type="submit" onClick={signIn}>Sign in</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Clone of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__RegisterButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
