import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import Navigation from "./Navigation";
import HeroPage from "../pages/fragments/HeroPage";

const Header = ({ reference }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);
  const [style, setStyle] = useState("");
  useEffect(() => {
    setPath(pathname);
    if (path === pathname) {
      window.scrollY === 0;
      setStyle("");
    }
  }, [path, pathname]);
  return (
    <header ref={reference} className={style}>
      <Navigation />
      <HeroPage />
    </header>
  );
};

export default Header;
