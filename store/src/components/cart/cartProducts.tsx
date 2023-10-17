import '../../styles/Cart.css';
import { useCart } from "../../hooks";
export const CartProducts: React.FC = () => {

    const { products } = useCart();


    return (
        <>
            {
                products.length ? products.map((product) => {
                    return <>
                        <div>
                            <h1>{product.title}</h1>
                        </div>
                    </>
                }) : <span className='cart-empty'> The cart is Empty</span >
            }
        </>
    );
};
