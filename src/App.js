import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Default from './component/Default';
import Details from './component/Details';
import Cart from './component/Cart/Cart';
import ProductList from './component/ProductList';
import Product from './component/Product';
import Modal from './component/Modal';


class App extends Component{
  render(){
    return (
      <div className="App">
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/Cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </React.Fragment>
      </div>
    );
  }
}


export default App;
