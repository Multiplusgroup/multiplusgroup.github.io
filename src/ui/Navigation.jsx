import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { getNavHeight } from "../features/display/display.slice";

import HeaderLinks from "./HeaderLinks";
import HeaderPromo from "./HeaderPromo";
import HeaderLogo from "./HeaderLogo";

const Navigation = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { headerHeight } = useSelector((state) => state.display);
  const [style, setStyle] = useState("");
  const [height, setHeight] = useState(0);
  useEffect(() => {
    dispatch(getNavHeight(ref.current.clientHeight));
    setHeight((cur) => {
      cur = headerHeight;
      return cur;
    });
  }, [dispatch, headerHeight, height]);
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setStyle((cur) => {
        cur = pos > height ? "inverted" : "";
        return cur;
      });
    };
    window.addEventListener("scroll", handleScroll);
  }, [height]);
  return (
    <Box className={`navBar ${style}`} ref={ref}>
      <HeaderLogo />
      {pathname.startsWith("/seguro-") ? <HeaderPromo /> : <HeaderLinks />}
    </Box>
  );
};

export default Navigation;
