import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
import "./placeOrder.css";

function PlaceOrder() {
  const { cartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  const total = Object.keys(cartItems).reduce((sum, id) => {
    const item = food_list.find((f) => f._id === id);
    return item ? sum + item.price * cartItems[id] : sum;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="place-order">
      <form className="po-details" onSubmit={handleSubmit}>
        <h1>Delivery Information</h1>
        <div className="po-row">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street address" required />
        <div className="po-row">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="po-row">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone number" required />
        <button type="submit" className="po-submit">
          Proceed to Payment (${(total + 2.5).toFixed(2)})
        </button>
      </form>

      <div className="po-summary">
        <h2>Order Summary</h2>
        <div className="po-line">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="po-line">
          <span>Delivery Fee</span>
          <span>$2.50</span>
        </div>
        <hr />
        <div className="po-line po-total">
          <span>Total</span>
          <span>${(total + 2.5).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
