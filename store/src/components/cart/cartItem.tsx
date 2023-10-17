import { FC } from "react";
import { TCartItem } from "../../types";
import { useCart } from "../../hooks";

export const CartItem: FC<{ productInfo: TCartItem }> = (props) => {
    const { removeProduct, increaseProductQuantity, decreaseProductQuantity } = useCart();

    return (
        <div className="cart-wrapper">
            <div className="column cart-img-thumbnail" style={{ "backgroundImage": `url(${props?.productInfo?.images[0]})` }} />
            <div className="column cart-item-info">
                <h3>{props?.productInfo.title}</h3>
                <p className="price">Total Price: {props?.productInfo.price * props.productInfo.quantity}</p>
                <button className="remove-button" onClick={() => removeProduct(props.productInfo)}>Remove</button>

            </div>
            <div className="column action">

                <div className='cart-item-quantity'>
                    <button className="change-quantity-button" onClick={() => increaseProductQuantity(props.productInfo)}>+</button>
                    <p>{props.productInfo.quantity}</p>
                    <button className="change-quantity-button" onClick={() => decreaseProductQuantity(props.productInfo)}>-</button>
                </div>
            </div>
        </div>
    );
}