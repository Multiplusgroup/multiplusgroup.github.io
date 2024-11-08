import Card from "@/components/Card";
import AnimatedSection from "@/ui/AnimatedSection";
import { Button, CardMedia, Grid2 as Grid } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const NaoEncontrada = ({ path }) => {
  const navigate = useNavigate();

  return (
    <AnimatedSection
      className="mx-auto my-[4rem] flex !w-[90%] grow flex-col items-center justify-center gap-5 md:!w-[80%]"
      animation="fade"
    >
      <h1 className="text-center">Essa página não está disponível</h1>
      <Card
        media={<CardMedia image="/NaoEncontrada.png" component="img" />}
        className="h-fit shadow-none"
      />
      <Grid className="space-y-4">
        <p>
          Acreditamos que o endereço digitado <strong>{path}</strong> foi
          inserido erroneamente, pois essa página não existe em nosso website.
        </p>
        <p>
          Caso você esteja tenha certeza que está acessando o endereço correto e
          ainda assim continua a essa mensagem de forma freqüente, por favor
          entre em{" "}
          <NavLink
            to="/contato"
            target="_blank"
            className="font-bold text-multiBrown no-underline hover:underline"
          >
            contato
          </NavLink>{" "}
          conosco, descrevendo o erro informando qual a página está tentando
          acessar.
        </p>
      </Grid>
      <Button className="button" onClick={() => navigate(-1)}>
        Voltar
      </Button>
    </AnimatedSection>
  );
};

export default NaoEncontrada;
