import { createContext, useContext, FC, useState } from 'react';
import { TCartContext, TCartItem } from '../../types';



const CartContext = createContext<TCartContext | undefined>(undefined);
const useCartContext = (): TCartContext => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('an Error ouccerd please try again');
  }

  return context;
};

const CartProvider: FC<{ children: React.ReactNode }> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<TCartItem[]>([]);

  const CartContextValue: TCartContext = {
    isOpen,
    setIsOpen,
    products,
    setProducts,
  };

  return <CartContext.Provider value={CartContextValue} {...props} />;
};

export { CartProvider, useCartContext };
