import React from 'react';
import './App.css';
import ProductList from './components/products/productList';
import { TProduct } from './types';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProducts } from './components/cart/cartProducts';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: '/cart',
      element: <CartProducts />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
