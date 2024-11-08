import Hero from "@/components/Hero";
import { Button, Grid2 as Grid } from "@mui/material";

const HeroContato = () => {
  return (
    <Hero type="heroCenter" color="heroOverlay">
      <Grid className="flex flex-col items-center justify-center gap-5">
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
    </Hero>
  );
};

export default HeroContato;
