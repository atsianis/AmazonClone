import "./App.css";
import {useEffect} from 'react';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect( ()=> {
    auth.onAuthStateChanged( user => {
      //MAPPING THE CONTEXT API TO THE FIREBASE STATE
      if (user) {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      }else {
        dispatch({
          type: 'SET_USER',
          payload: null
        })
      }
    })
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
