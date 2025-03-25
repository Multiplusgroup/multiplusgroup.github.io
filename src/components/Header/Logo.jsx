import ImgLogo from "@assets/img/Site_Extendida.png";
import { Link } from "@tanstack/react-router";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/">
      <img
        src={ImgLogo}
        alt="Multiplusgroup Logo"
        className={`logo ${className}`}
      />
    </Link>
  );
};

export default Logo;
