import { useLocation } from "react-router-dom";

import HeroIndex from "./Index/HeroIndex";
import HeroQuemSomos from "./QuemSomos/HeroQuemSomos";
import HeroSeguros from "./Seguros/HeroSeguros";
import HeroContato from "./Contato/HeroContato";

const HeroPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <HeroIndex />}
      {pathname === "/quem-somos" && <HeroQuemSomos />}
      {pathname === "/seguros" && <HeroSeguros />}
      {pathname === "/contato" && <HeroContato />}
    </>
  );
};

export default HeroPage;
