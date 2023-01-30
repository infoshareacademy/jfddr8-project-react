import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

type homeProps = {
  shoppingCart: number;
  addToShopping: (itemPrice: number) => void;
  className: string;
}

function Home(props: homeProps) {
    return (
        <div>
          <ShoppingCart shoppingCart={props.shoppingCart} />
          <ProductList addToShopping={props.addToShopping} />
        </div>
    );
};

export default Home;
