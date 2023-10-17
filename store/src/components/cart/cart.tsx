import '../../styles/ProductCard.css';
import { Link } from 'react-router-dom';
export const Cart: React.FC = () => {

    return (
        <>
            <Link to={'/cart'} className='cartButton' >

                <div className="cart" >
                    <svg className="outCart" xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
                        <path d="M2 6h10l10 40h32l8-24H16"></path>
                        <circle cx="23" cy="54" r="4"></circle>
                        <circle cx="49" cy="54" r="4"></circle>
                    </svg>
                </div>
            </Link>

        </>

    );
};
