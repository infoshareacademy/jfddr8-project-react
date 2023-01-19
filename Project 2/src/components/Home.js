import { ProductListItem } from "./ProductsListItem";
import App from "../App";
import ShoppingCart from './ShoppingCart'
import { ProductList } from "./ProductList";

function Home(props) {
    return (
        <>
            <ProductList addToShopping={props.addToShopping} />

            <ShoppingCart shoppingCart={props.shoppingCart} />
        
        </>

    )
}

export default Home