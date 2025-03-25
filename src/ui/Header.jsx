import Logo from "@components/Header/Logo";
import Navbar from "@components/Header/Navbar";
import Navbutton from "@components/Header/Navbutton";
import { useScrollTrigger } from "@mui/material";

const Header = (className = "") => {
  const root = document.getElementById("root");
  const trigger = useScrollTrigger({
    target: root,
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <header
      className={`transition-all duration-500 ${className} ${trigger && "inverted"} `}
    >
      <Logo className={`${trigger && "!max-h-[50px]"}`} />
      <Navbar className="hidden lg:block" />
      <Navbutton className="block lg:hidden" />
    </header>
  );
};

export default Header;
