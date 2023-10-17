import { TProduct } from "../../types";
export const ProductCard: React.FC<{ productInfo: TProduct }> = ({ productInfo }) => {
    return (
        <div className="card">
            <div className="wrapper">
                <div className="card_img">
                    <img
                        src={productInfo?.images[0]}
                        alt={productInfo.title}
                        width={50}
                        height={50}
                        className="self-start rounded-md"
                    />
                </div>
                <div className="cardInfo">
                    <h1>{productInfo?.title}</h1>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="price old_price">{productInfo?.price}</p>
                        </div>
                        <div className="cart">
                            <svg className="outCart" xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                                <path d="M2 6h10l10 40h32l8-24H16"></path>
                                <circle cx="23" cy="54" r="4"></circle>
                                <circle cx="49" cy="54" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};