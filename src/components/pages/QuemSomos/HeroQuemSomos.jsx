import Hero from "@/components/Hero";
import { Button, Grid2 as Grid } from "@mui/material";

const HeroQuemSomos = () => {
  return (
    <Hero type="heroCenter" color="heroOverlay">
      <Grid container className="grid grid-cols-2 items-center">
        <Grid container className="flex flex-col justify-center gap-5">
          <h1 className="text-start text-5xl">Titulo Hero</h1>
          <p className="text-start">Texto hero (opcional)</p>
          <Grid>
            <Button className="button buttonCTA w-[85%]">
              Botão CTA hero (opcional)
            </Button>
          </Grid>
        </Grid>
        <Grid className="space-y-3">
          <p>Parágrafo 1 de texto hero. Lorem, ipsum dolor.</p>
          <p>
            Parágrafo 2 de texto hero, com link para navegação{" "}
            <a href={"/quem-somos#parceiras"}>link para outra parte do site</a>.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            sint.
          </p>
        </Grid>
      </Grid>
    </Hero>
  );
};

export default HeroQuemSomos;
