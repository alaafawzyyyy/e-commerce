import { useState } from "react";
import { ShopContext } from ".";
import { products } from "../assets";

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  return (
    <ShopContext.Provider
      value={{
        currency,
        delivery_fee,
        products,
        search,
        setSearch,
        showSearch,
        setShowSearch,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
