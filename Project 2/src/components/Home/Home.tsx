import { useContext, useState } from "react";
import { doc, setDoc } from 'firebase/firestore';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { ProductList } from "../ProductList/ProductList";
import { signOut } from 'firebase/auth';
import { firebaseAuth, firebaseDb } from "../../index";
import { useNavigate } from "react-router-dom";
import { CartProduct, StoreContext } from "../../providers/StoreProvider";
import { CartList } from "../CartList/CartList";

export const Home = (): JSX.Element => {
    const { cartValue, setCartProducts, username, cartProducts } = useContext(StoreContext);
    const [isCartActive, setCartActive] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogout = async (): Promise<void> => {
        await signOut(firebaseAuth);
        navigate('/login');
    }

    const addToCart = async (product: CartProduct): Promise<void> => {
        try {
          await setDoc(doc(firebaseDb, 'cart', `${username}`), {
            products: [...cartProducts, product],
        });
          setCartProducts([...cartProducts, product]);
        } catch (error) {
          console.log(error);
        }
      }

    const removeFromCart = async (productId: number): Promise<void> => {
        const newArr = cartProducts.filter(obj => obj.id !== productId);
        try {
          await setDoc(doc(firebaseDb, 'cart', `${username}`), {
            products: newArr,
          });
          setCartProducts(newArr);
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
                    <button onClick={() => setCartActive(!isCartActive)}>{isCartActive ? 'Go Back' : 'Show cart'}</button>
                </div>
                <button onClick={handleLogout}>Log out</button>
            </div>
            {isCartActive ? (
                <div className="cart-list">
                    <CartList cartList={cartProducts} removeFromCart={removeFromCart}/>
                </div>
            ) : (
            <div className="product-list">
                <h1>Lista produktów</h1>
                <div>
                    <ProductList addToCart={addToCart} />
                </div>
            </div>
            )}
        </div>
    )
}