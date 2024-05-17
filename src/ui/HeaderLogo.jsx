import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderLogo = () => {
  const { headerHeight } = useSelector((state) => state.display);
  const { pathname } = useLocation();
  const [className, setClassName] = useState("");
  const [path, setPath] = useState(pathname);
  useEffect(() => {
    setPath(pathname);
    if (path === pathname && window.scrollY === 0) setClassName("");
  }, [path, pathname]);
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setClassName(pos > headerHeight ? "max-h-[50px]" : "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, [headerHeight]);
  return (
    <img
      src="./Site_Extendida.png"
      alt="Logo Multiplus"
      className={`logo ${className}`}
    />
  );
};

export default HeaderLogo;
