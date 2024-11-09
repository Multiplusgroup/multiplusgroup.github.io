import SeguroExpander from "@/components/pages/Seguros/SeguroExpander";
import { Divider, Grid2 as Grid } from "@mui/material";

const SegurosListaExpansor = ({ lista }) => {
  return (
    <Grid className="flex flex-col gap-3">
      {lista.map((item, i) => (
        <Grid className="flex flex-col gap-3" key={i}>
          <SeguroExpander item={item} />
          {i < lista.length - 1 && <Divider variant="middle" />}
        </Grid>
      ))}
    </Grid>
  );
};

export default SegurosListaExpansor;
