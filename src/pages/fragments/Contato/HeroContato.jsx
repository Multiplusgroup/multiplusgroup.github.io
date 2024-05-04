import { Grid, Button } from "@mui/material";

import Hero from "../../../ui/Hero";

const HeroContato = () => {
  return (
    <Hero type="heroCenter" color="heroOverlay" pushdown>
      <Grid container className="grid grid-cols-1 items-center">
        <Grid
          container
          className="flex flex-col items-center justify-center gap-5"
        >
          <h1 className="text-5xl">Esclareça suas dúvidas</h1>
          <p>
            Caso tenha alguma dúvida, sugestão ou reclamação, entre em contato
            conosco em nossos canais de atendimento
          </p>
          <Button
            className="button buttonCTA w-[75%] max-w-[650px]"
            LinkComponent={"a"}
            href="#formulario"
          >
            Desejo fazer contato via e-mail
          </Button>
        </Grid>
      </Grid>
    </Hero>
  );
};

export default HeroContato;
