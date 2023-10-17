import React from 'react';
import './App.css';
import ProductList from './components/products/productList';

function App() {
  return (
    <>
      <div className="main" >
        <div>
          <button className="cartButton">My Cart  </button>
        </div>
        <ProductList />

      </div>
    </>
  );
}

export default App;
