import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <h1>I am the Checkout Component</h1>
          </Route> 
        </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
