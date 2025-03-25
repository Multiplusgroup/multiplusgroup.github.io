import ImgError from "@assets/img/Erro.png";
import BackButton from "@components/BackButton";
import Card from "@components/Card";
import { CardMedia, Grid2 as Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import { useEffect } from "react";

const PageErroGeral = ({ error }) => {
  useEffect(() => {
    document.title = "Erro - Multiplusgroup";
  }, []);

  return (
    <AnimatedSection
      className="mx-auto my-[4rem] flex !w-[90%] grow flex-col items-center justify-center gap-5 md:w-[85%]"
      animation="fade"
    >
      <Heading className="text-multi-brown text-center">
        Algo inesperado acounteceu!
      </Heading>
      <Card
        media={<CardMedia image={ImgError} component="img" />}
        className="!mt-5 !h-fit !rounded-lg !shadow-none"
      />
      <p>
        Caso você esteja vendo essa mensagem de forma freqüente, por favor entre
        em{" "}
        <Link
          to="/contato"
          target="_blank"
          className="text-multi-brown font-bold no-underline hover:underline"
        >
          contato
        </Link>{" "}
        conosco, colocando na mensagem a descrição de erro mostrada abaixo:
      </p>
      <Grid className="error-message shadow-multi h-[300px] w-[90%] flex-col gap-3 overflow-x-hidden overflow-y-auto rounded-lg bg-red-400/80 px-6 py-4 text-red-900">
        <p>
          <strong>Nome do erro: </strong> {error?.name}
        </p>
        <p>
          <strong>Mensagem do erro: </strong> {error?.message}
        </p>
        <p>
          <strong>Detalhes do erro: </strong>
        </p>
        <pre className="text-wrap">{error.stack}</pre>
      </Grid>
      <BackButton className="btn btn-cta" />
    </AnimatedSection>
  );
};

export default PageErroGeral;
