import { useContext, useEffect } from "react";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { ProductList } from "../ProductList/ProductList";
import { AuthContext } from "../../providers/Auth";
import { useNavigate } from "react-router-dom";

type homeProps = {
    shoppingCart: number;
    addToShopping: (itemPrice: number) => void;
    className: string;
} 

export const Home = ({ basketValue, addToCart }) => {
    const { isLogged, setIsLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogged) {
            navigate('/login');
        }
    }, [isLogged, navigate]);

    const handleLogout = () => {
        localStorage.clear();
        setIsLogged(false);
    }

    return (
        <div className="app">
            <div className="header">
                <div className="cart">
                    <h1>Koszyk:</h1>
                    <div><ShoppingCart basketValue={basketValue}/></div>
                </div>
                <button onClick={handleLogout}>Log out</button>
            </div>
            <div className="product-list">
                <h1>Lista produktów</h1>
                <div>
                    <ProductList addToCart={addToCart} />
                </div>
            </div>
        </div>
    )
}