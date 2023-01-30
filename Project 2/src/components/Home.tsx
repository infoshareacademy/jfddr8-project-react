import ProductsList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

function Home() {
  return (
    <div>
      <ShoppingCart />
      <ProductsList />
    </div>
  );
}

export default Home;