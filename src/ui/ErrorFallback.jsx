import Card from "@/components/Card";
import AnimatedSection from "@/ui/AnimatedSection";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { Button, CardMedia, Grid2 as Grid } from "@mui/material";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorFallback = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <AnimatedSection
        className="mx-auto my-[4rem] flex !w-[90%] grow flex-col items-center justify-center gap-5 md:w-[85%]"
        animation="fade"
      >
        <h1 className="text-center">Algo inesperado acounteceu!</h1>
        <Card
          media={<CardMedia image="/Erro.png" component="img" />}
          className="h-fit shadow-none"
        />
        <p>
          Caso você esteja vendo essa mensagem de forma freqüente, por favor
          entre em{" "}
          <NavLink
            to="/contato"
            target="_blank"
            className="font-bold text-multiBrown no-underline hover:underline"
          >
            contato
          </NavLink>{" "}
          conosco, colocando na mensagem a descrição de erro mostrada abaixo:
        </p>
        <Grid className="error h-[300px] w-full flex-col gap-3 overflow-y-auto rounded-lg px-6 py-4 text-red-900 shadow-multi">
          <p>
            <strong>Nome do erro: </strong> {error?.name}
          </p>
          <p>
            <strong>Mensagem do erro: </strong> {error?.message}
          </p>
          <p>
            <strong>Detalhes do erro: </strong>
            <span className="whitespace-pre text-wrap break-words">
              {error?.stack}
            </span>
          </p>
        </Grid>
        <Button
          className="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </Button>
      </AnimatedSection>
      <Footer />
    </>
  );
};

export default ErrorFallback;
