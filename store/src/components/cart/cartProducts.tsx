import '../../styles/Cart.css';
import { useCart } from "../../hooks";
import { CartItem } from './cartItem';
export const CartProducts: React.FC = () => {

    const { products } = useCart();


    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <h1>My cart</h1>
            </div>
            <div className='cart-content'>
                <ul>
                    {
                        products.length ? products.map((product) => {
                            return <>
                                <li>
                                    <CartItem productInfo={product}></CartItem>
                                    


                                </li>
                            </>
                        }) : <span className='cart-empty'> The cart is Empty</span >
                    }
                </ul>

            </div>

        </div>
    );
};
