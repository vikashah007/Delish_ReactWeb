import React, { useContext } from "react";
import "./PlaceOrder.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from "../../component/context/StoreConttext";
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  const notify = () => toast.success("Order Placed Sucessfully !");
  const addFood = () => toast.error("Please add Items in cart!");
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-feilds">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder="PinCode" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0? 0 :getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={getTotalCartAmount() !== 0 ? () => notify() : () => addFood()}>PROCEED TO PAYMENT</button>
                </div>
      </div>
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default PlaceOrder;
