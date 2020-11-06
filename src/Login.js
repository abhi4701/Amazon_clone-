import React ,{useState, useEffect }from 'react'
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";


function Login() {

    const history= useHistory();
  const [email ,setEmail] =useState('');
  const [password ,setPassword] =useState('');

    const signIn = e =>{
        e.preventDefault();

        //firebase login cheat
        auth
        .signInWithEmailAndPassword(email , password)
        .then( auth =>{
            history.push('/');
        })
        .catch(error => alert(error.message))

    }

    const register =e =>{
          e.preventDefault();

          //do some fancy firebase register.
          auth
             .createUserWithEmailAndPassword(email , password)
             .then((auth) =>{
                 console.log(auth);
                 if(auth){
                     history.push('/');
                 }
             })

             .catch(error => alert(error.message));
    }


    return (
        <div className="login">

            <Link to="/">
               <img className="login__logo" 
                src='http://pngimg.com/uploads/amazon/amazon_PNG24.png'
                alt="Logo"
                />
            </Link>
            
                <div className="login__container">
                            <h1>Sign-In</h1>
                       <form action="">
                          <h5>E-mail</h5>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                            <h5>Password</h5>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                       </form>
                       <p>By continuing, you agree to Amazon's Clone Fake Conditions of Use and Privacy Notice.</p>
                      <button className="login__createButton" onClick={register}>Create Your Amazon account </button>
                </div>

        </div>
    )
}

export default Login
