import { useContext, useEffect, useState } from "react";
import {ShopContext} from "../context"
import {Title} from "../components"
function Orders() {
  const {products,currency,cartItems}=useContext(ShopContext)
  const [orderData,setOrderData]=useState([])

  useEffect(() => {
  let tempData = [];
  for (const items in cartItems) {
    for (const item in cartItems[items]) {
      if (cartItems[items][item] > 0)
        tempData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item],
        });
    }
  }
  setOrderData(tempData);
}, [cartItems]);

  return (
  <div className="border-t pt-16">
    <div className="text-2xl">
      <Title text1={"MY"} text2={"ORDERS"}/>
    </div>
         <div>
        {orderData.map((item, index) => {
          const data = products.find(
            (product) => product._id === item._id
          );

          return (
        <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4  ">
          <div className="flex items-start-gap-6 text-sm">
            <img className="w-16 sm:w-20" src={data.image[0]} alt=""/>
            <div className="mx-6">
              <p className="sm:text-base font-medium">{data.name}</p>
              <div className="flex items-center gap-3 mt-1 text-base text-gray ">
                <p className="text-sm font-medium">{currency}{data.price}</p>
                <p>Quantity : {item.quantity}</p>
                <p>Size: {item.size}</p>
              </div>
              <p className="mt-1">Date: <span className="text-gray-400">Tue Nov 25 2025 </span></p>
              <p className="mt-1">Payment: <span className="text-gray-400">COD </span></p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-between">
          <div className="flex item-center gap-2">
            <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
            <p className="text-sm md:text-base">Ready to ship</p>
          </div>
          <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
          </div>
        </div>
  )} )
      }</div>
  </div>)
}

export default Orders;
