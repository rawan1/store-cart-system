import { TProduct } from "../../types";
import '../../styles/ProductCard.css';
import { useCart } from "../../hooks";
export const ProductCard: React.FC<TProductCardProps> = ({ productInfo }) => {

    const { addProduct } = useCart();

    const addedToCart = (product: TProduct) => {
        product.state = 'added';
        addProduct({ ...product, quantity: 1, totalPrice: product.price });
    }
    return (
        <div className="card">
            <div className="wrapper">
                <div className="card_img" style={{ "backgroundImage": `url(${productInfo?.images[0]})` }} />
                <div className="cardInfo">
                    <h1>{productInfo?.title}</h1>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="price">{productInfo?.price}</p>
                        </div>
                        <div className="cart">
                            <button className={`cart add-to-cart-${productInfo.state}`} onClick={() => addedToCart(productInfo)}>
                                <svg className="outCart" xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                                    <path d="M2 6h10l10 40h32l8-24H16"></path>
                                    <circle cx="23" cy="54" r="4"></circle>
                                    <circle cx="49" cy="54" r="4"></circle>
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
type TProductCardProps = {
    productInfo: TProduct
}