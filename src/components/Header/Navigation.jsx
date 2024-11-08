import HeaderLinks from "@/components/Header/HeaderLinks";
import HeaderPromo from "@/components/Header/HeaderPromo";
import HeaderLogo from "@/components/Header/Logo";
import { root } from "@/constants/pageElements";
import { Grid2 as Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const [style, setStyle] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const pos = root.scrollTop;
      setStyle((cur) => {
        cur = pos > 0 ? "inverted" : "";
        return cur;
      });
    };
    root.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid className={`navBar ${style} `} ref={ref}>
      <HeaderLogo />
      {pathname.startsWith("/seguro-") ? <HeaderPromo /> : <HeaderLinks />}
    </Grid>
  );
};

export default Navigation;
