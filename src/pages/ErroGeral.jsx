import { Grid, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

const ErroGeral = ({ error, backButton }) => {
  return (
    <Grid
      item
      className="center my-[4rem] grid h-full grid-cols-1 content-center items-center justify-center gap-8"
    >
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col items-center justify-center"
      >
        <h1 className="text-center text-5xl">Algo inesperado acounteceu!</h1>
        <CardMedia
          image="/Erro.png"
          component="img"
          sx={{ minWidth: "0%", maxWidth: "450px" }}
          className="mx-auto"
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
      </Grid>
      <Grid
        item
        className="error mx-auto max-h-[250px]  w-[60%] flex-col gap-3 overflow-y-auto rounded-lg px-6 py-4 text-red-900 shadow-multi transition-all duration-500 lg:max-h-[400px]"
      >
        <p>
          <strong>Nome do erro: </strong> {error.name}
        </p>
        <p>
          <strong>Mensagem do erro: </strong> {error.message}
        </p>
        <p>
          <strong>Detalhes do erro: </strong>
          <span className="whitespace-pre text-wrap break-words">
            {error.stack}
          </span>
        </p>
      </Grid>
      <Grid item className="mx-auto">
        {backButton}
      </Grid>
    </Grid>
  );
};

export default ErroGeral;
