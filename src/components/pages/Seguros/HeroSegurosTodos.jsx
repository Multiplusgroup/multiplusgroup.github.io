import Hero from "@/components/Hero";
import { Button, Grid2 as Grid } from "@mui/material";

const HeroSegurosTodos = () => {
  return (
    <Hero type="heroCenter" color="heroOverlay" >
      <Grid container className="grid grid-cols-2 items-center gap-x-10">
        <Grid className="space-y-3">
          <p className="text-start">
            Parágrafo 1 de texto hero. Lorem ipsum dolor sit amet.
          </p>
          <p className="text-start">
            Parágrafo 2 de texto hero. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Placeat, assumenda..
          </p>
        </Grid>
        <Grid container className="flex flex-col justify-center gap-5">
          <h1 className="text-end text-5xl">Título Hero</h1>
          <p className="text-end">Texto hero (opcional)</p>
          <Grid>
            <Button
              className="button buttonCTA w-[85%]"
              LinkComponent={"a"}
              href="#seguros"
            >
              Conheça toda nossa linha de seguros
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Hero>
  );
};

export default HeroSegurosTodos;
