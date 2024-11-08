import { Grid2 as Grid } from "@mui/material";

import Promocional from "@/components/pages/Promo/Promocional";
import { useEffect } from "react";

const Testes = () => {
  useEffect(() => {
    throw new Error("Some error");
  });
  return (
    <Grid className="mt-[100px] flex items-center justify-center">
      <Promocional />
    </Grid>
  );
};

export default Testes;
