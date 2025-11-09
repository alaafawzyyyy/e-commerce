import { ShopContext } from ".";
import { products } from "../assets";

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  return (
    <ShopContext.Provider value={{ currency, delivery_fee, products }}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
