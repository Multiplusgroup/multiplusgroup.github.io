import { Grid } from "@mui/material";

import Copyright from "./Copyright";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <AnimatedSection animation="fade">
      <footer className="footer">
        <Grid container className="grid gap-5 px-10 pb-5 md:grid-cols-3">
          <Grid item className="flex flex-col gap-4 text-center md:text-start">
            <h3 className="font-site text-multiGreen-xLight">
              O rodapé pode conter várias colunas
            </h3>
            <p className="opacity-75">
              Cuja customização será feita depois de defirnimos quantas colunas
              este terá
            </p>
          </Grid>
          <Grid item className="text-center">
            <h3 className="font-site text-multiGreen-xLight">
              Mas se esste possuir mais que duas colunas...
            </h3>
            <p className="opacity-75">
              ou apenas uma, o conteúdo nesses casos fica centralizado como esse
            </p>
          </Grid>
          <Grid item className="flex flex-col gap-4 text-center md:text-end">
            <h3 className="font-site text-multiGreen-xLight">
              E as colunhas se ajustam automaticamente ao conteúdo
            </h3>
            <p className="opacity-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              vel! Neque dolores cupiditate corrupti ipsam? Fugit quod officia
              quos illo tempore numquam et nostrum repellat ab aperiam. Aperiam
              sint harum corrupti illo saepe, odio, atque dolores, cumque minus
              natus voluptatibus.
            </p>
          </Grid>
        </Grid>
        <Copyright />
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
