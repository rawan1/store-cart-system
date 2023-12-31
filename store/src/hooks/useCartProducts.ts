import { useCartContext } from "../context/cart-context/CartContextProvider";
import { TCartItem, TProduct } from "../types";

const useCartProducts = () => {
  const { products, setProducts } = useCartContext();

  const updateQuantitySafely = (
    currentProduct: TCartItem,
    targetProduct: TCartItem,
    quantity: number
  ): TCartItem => {
    if (currentProduct.id === targetProduct.id) {
      return Object.assign({
        ...currentProduct,
        quantity: currentProduct.quantity + quantity,
      });
    } else {
      return currentProduct;
    }
  };

  const addProduct = (newProduct: TCartItem) => {
    let updatedProducts;
    const isProductAlreadyInCart = products.some(
      (product: TProduct) => newProduct.id === product.id
    );

    if (isProductAlreadyInCart) {
      updatedProducts = products.map((product: TCartItem) => {
        return updateQuantitySafely(product, newProduct, newProduct.quantity);
      });
    } else {
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
  };

  const removeProduct = (productToRemove: TCartItem) => {
    const updatedProducts = products.filter(
      (product: TCartItem) => product.id !== productToRemove.id
    );

    setProducts(updatedProducts);
  };
  /**
   * this function is supposed to handle checkout request 
   */
  const checkout = () => {
    setProducts([]);
  }

  const increaseProductQuantity = (productToIncrease: TCartItem) => {
    const updatedProducts = products.map((product: TCartItem) => {
      return updateQuantitySafely(product, productToIncrease, +1);
    });

    setProducts(updatedProducts);
  };

  const decreaseProductQuantity = (productToDecrease: TCartItem) => {
    if (productToDecrease.quantity > 1) {
      const updatedProducts = products.map((product: TCartItem) => {
        return updateQuantitySafely(product, productToDecrease, -1);
      });

      setProducts(updatedProducts);
    }

  };

  return {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    checkout
  };
};

export default useCartProducts;
