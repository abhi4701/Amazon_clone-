import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import Payment from "./Payment";
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HhLaVBBlxYmN9M6spQKsUKv2uVqOOsJwf3iHg3BmZUiFQSKxKnA82aN8t3gxGlnWKDTTPyP6jic70izeXt4csVL00qQWKR0wZ"
);
function App() {
    
  const [{}, dispatch] =useStateValue();


   useEffect (() =>{
     auth.onAuthStateChanged(authUser =>{
        

        if(authUser){
          // user is just logged in /the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        }else{
              //user is logged out
              dispatch({
                type: 'SET_USER',
                user: null
              })
        }
       
     })
   }, [])

  return (
    <Router>
         <div className="App">
       
           <Switch>
           <Route path="/login">
             <Login />
          </Route> 
           
           <Route path="/checkout">
           <Header />
             <Checkout />
          </Route> 
          <Route path="/payment">
             <Header />
             <Elements stripe={promise}>
             <Payment />
             </Elements>
              
              
          </Route>
          <Route path="/">
          <Header />
           <Home />
          </Route> 
     </Switch>
      </div>
     </Router>
   
  );
}

export default App;
