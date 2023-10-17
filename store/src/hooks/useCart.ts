import useCartProducts from './useCartProducts';
import { Navigate } from 'react-router-dom';

const useCart = () => {
  const {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCartProducts();

  const openCart = () => Navigate({ to: '/cart' });

  return {
    openCart,
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  };
};

export default useCart;
