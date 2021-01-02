import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route> 
        </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
