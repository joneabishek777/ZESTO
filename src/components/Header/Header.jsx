import "./Header.css";

function Header() {
  const scrollToMenu = () => {
    document.getElementById("food-display")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header" id="home">
        <div className="header-elements">
          <div className="header-overlay"></div>
          <div className="header-content">
            <span className="header-badge">🔥 Fresh & Fast Delivery</span>
            <h2>
              Order your <br />
              favourite food, <span>zesto-fast.</span>
            </h2>
            <p>
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients. Our mission is to satisfy your
              cravings and elevate your dining experience, one delicious meal at
              a time.
            </p>
            <button onClick={scrollToMenu}>View Menu</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
