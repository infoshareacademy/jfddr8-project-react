import { useContext } from "react";
import { doc, setDoc } from 'firebase/firestore';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { ProductList } from "../ProductList/ProductList";
import { signOut } from 'firebase/auth';
import { firebaseAuth, firebaseDb } from "../../index";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../providers/StoreProvider";

export const Home = (): JSX.Element => {
    const { cartValue, setCartValue, username } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleLogout = async (): Promise<void> => {
        await signOut(firebaseAuth);
        navigate('/login');
    }

    const addToCart = async (productValue: number): Promise<void> => {
        try {
          await setDoc(doc(firebaseDb, 'cartValue', `${username}`), {
            value: cartValue + productValue,
          });
          setCartValue(cartValue + productValue);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div className="app">
            <div className="header">
                <div className="cart">
                    <h1>Koszyk:</h1>
                    <div><ShoppingCart basketValue={cartValue}/></div>
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