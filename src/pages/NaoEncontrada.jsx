import { Grid, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

const NaoEncontrada = ({ path, backButton }) => {
  return (
    <Grid
      item
      className="center my-[4rem] grid h-full grid-cols-1 content-center items-center justify-center gap-8"
    >
      <Grid
        item
        className=" mx-auto flex w-[50%] flex-col items-center justify-center gap-4"
      >
        <h1 className="text-center text-5xl">
          Essa página não está disponível
        </h1>

        <CardMedia
          image="/NaoEncontrada.png"
          component="img"
          sx={{ minWidth: "0%", maxWidth: "450px" }}
          className="mx-auto"
        />

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
      <Grid item className="mx-auto">
        {backButton}
      </Grid>
    </Grid>
  );
};

export default NaoEncontrada;
