import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";

import EmConstrucao from "../pages/fragments/Construcao/ContentConstrucao";

const Promocional = ({ children, cotacaoURL }) => {
  const { pathname } = useLocation();
  const { navBarHeight } = useSelector((state) => state.display);
  const [height, setHeight] = useState(0);
  const [style, setStyle] = useState({});
  useEffect(() => {
    setHeight((cur) => {
      cur = navBarHeight;
      return cur;
    });
    setStyle({ marginTop: `${height}px` });
  }, [navBarHeight, height]);
  return (
    <>
      {!cotacaoURL && <EmConstrucao />}
      {cotacaoURL && (
        <Grid
          container
          className="mx-auto flex h-full w-[85%] flex-col items-center justify-center gap-5"
          style={pathname.startsWith("/seguro-") ? style : {}}
        >
          <Grid item>{children}</Grid>
          <Grid item className="mb-[4rem]">
            <Button
              className="button buttonCTA w-[300px] !py-5"
              LinkComponent={Link}
              to={cotacaoURL}
            >
              Fazer cotação
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Promocional;
