/* eslint-disable react/prop-types */
import "./Logo.css";

function Logo({ size = "md" }) {
  return (
    <div className={`zesto-logo zesto-logo--${size}`}>
      <svg viewBox="0 0 48 48" className="zesto-logo-mark" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#zestoGradient)" />
        <path
          d="M24 10c-1.2 3-4 5-4 9a4 4 0 0 0 8 0c0-1.2-.6-2.2-1.2-3.2C28 18 30 21 30 25a6 6 0 0 1-12 0c0-6 4-9 6-15Z"
          fill="#fff8f0"
        />
        <defs>
          <linearGradient id="zestoGradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ff8a5c" />
            <stop offset="1" stopColor="#e0391c" />
          </linearGradient>
        </defs>
      </svg>
      <span className="zesto-logo-text">ZESTO</span>
    </div>
  );
}

export default Logo;
