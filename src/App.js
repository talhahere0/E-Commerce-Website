import React  from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Cart from './pages/Cart.jsx';

import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';




function App() {
  
  
  return (
    < Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/productlist" component={ProductList}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
      </Router>
  );
}

export default App;
