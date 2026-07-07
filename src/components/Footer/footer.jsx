import "./footer.css";
import { assets } from "./../../assets/assets";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="foot-left">
          <Logo size="lg" />
          <p>
            ZESTO brings your favourite meals from the best local kitchens
            straight to your door. Fresh ingredients, fast delivery, and
            flavour in every bite.
          </p>
          <div className="foot-soc">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="foot-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="foot-right">
          <h2>Get in Touch</h2>
          <section>
            <p>+1-555-ZESTO-00</p>
            <p>hello@zesto.com</p>
          </section>
        </div>
        <p className="foot-copyright">© 2026 ZESTO. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
