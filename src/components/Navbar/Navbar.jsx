import { assets } from "/src/assets/assets.js";
import { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { StoreContext } from "../../context/StoreContext";

function Navbar() {
  const [menu, setMenu] = useState("Home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartItemCount, searchTerm, setSearchTerm, theme, toggleTheme } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (name, id) => {
    setMenu(name);
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="navbar">
        <Link to="/" onClick={() => goToSection("Home", "home")}>
          <Logo />
        </Link>

        <ul className={`list-items ${mobileOpen ? "show" : ""}`}>
          <a onClick={() => goToSection("Home", "home")}>
            <li className={menu === "Home" ? "active" : ""}>Home</li>
          </a>
          <a onClick={() => goToSection("about", "explore-menu")}>
            <li className={menu === "about" ? "active" : ""}>About</li>
          </a>
          <a onClick={() => goToSection("products", "food-display")}>
            <li className={menu === "products" ? "active" : ""}>Products</li>
          </a>
          <a onClick={() => goToSection("Contact", "footer")}>
            <li className={menu === "Contact" ? "active" : ""}>Contact</li>
          </a>
        </ul>

        <div className="icons">
          <div className={`search-box ${searchOpen ? "open" : ""}`}>
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setSearchOpen(true)}
            />
            <img
              src={assets.search_icon}
              onClick={() => setSearchOpen((prev) => !prev)}
              alt="search"
            />
          </div>

          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <Link to="/cart" className="basket-wrap">
            <img className="basket" src={assets.basket_icon} alt="cart" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>

          <button className="login-btn">Login</button>

          <button
            className="hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
