import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';
import MyProvider from "./provider/provider";

function App() {

  return (
    <MyProvider>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/react/orders" component={Orders} />
            <Route path="/react/products" component={Products} />
            <Route path="/react" component={Dashboard} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
        
      </div>
    </MyProvider>
  );
}

export default App;
