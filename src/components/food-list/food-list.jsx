/* eslint-disable react/prop-types */
import { food_list, assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./food-list.css";
import { useContext } from "react";


function FoodList({category}) {
  const { searchTerm } = useContext(StoreContext);

  const filteredList = food_list
    .filter(food => category === "All" || food.category === category)
    .filter(food =>
      food.name.toLowerCase().includes((searchTerm || "").toLowerCase())
    );

  return (
    <>
      <div id="food-display">
        <h1 className="food-list-heading">Top dishes near you</h1>
        {filteredList.length === 0 ? (
          <p className="no-results">No dishes match your search. Try another keyword!</p>
        ) : (
          <div className="food-list-component">
            {filteredList.map(food => <FoodItem key={food._id} food={food} />)}
          </div>
        )}
      </div>
    </>
  );
}
function FoodItem({ food }) {
  const { cartItems, addToCart, removrFromCart } = useContext(StoreContext);

  const count = cartItems[food._id] || 0;

  const takeDataInc = (c, id) => {
    addToCart(id);
  };

  const takeDataDec = (c, id) => {
    removrFromCart(id);
  };

  return (

      <>
          <div className="food-list" key={food._id}>
            <div className="food-img-wrap">
              <img src={food.image} alt={food.name} />
            </div>
            <div className="count-buttons-container">
              {!count ? (
                <div className="when-single">
                  <img
                    onClick={()=>takeDataInc(food.name,food._id)}
                    src={assets.add_icon_white}
                  />
                </div>
              ) : (
                <div className="when-active">
                  <img
                    onClick={()=>takeDataInc(food.name,food._id
                    )}
                    src={assets.add_icon_green}
                  />
                  <p>{count}</p>
                  <img
                    onClick={()=>takeDataDec(food.name,food._id)}
                    src={assets.remove_icon_red}
                  />
                </div>
              )}
            </div>

            <div className="food-name-rating">
              <h2>{food.name}</h2>
              <img className="rating" src={assets.rating_starts} />
            </div>

            <div className="food-details">
              <p>{food.description}</p>
              <h3>${food.price}</h3>
            </div>
          </div>
      </>
  
  );
}



export default FoodList;
