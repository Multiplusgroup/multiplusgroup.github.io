import { root } from "@/constants/pageElements";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LogoImg from "/Site_Extendida.png";

const Logo = () => {
  const { pathname } = useLocation();
  const [className, setClassName] = useState("");
  const [path, setPath] = useState(pathname);

  useEffect(() => {
    setPath(pathname);
    if (path === pathname && root.scrollTop === 0) setClassName("");
  }, [path, pathname]);
  useEffect(() => {
    const handleScroll = () => {
      const pos = root.scrollTop;
      setClassName(pos > 0 ? "max-h-[50px]" : "");
    };
    root.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <img src={LogoImg} alt="Logo Multiplus" className={`logo ${className}`} />
  );
};

export default Logo;
