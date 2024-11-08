import Copyright from "@/components/Footer/Copyright";
import AnimatedSection from "@/ui/AnimatedSection";
import { Grid2 as Grid } from "@mui/material";

const Footer = () => {
  return (
    <AnimatedSection animation="fade">
      <footer className="footer">
        <Grid className="grid items-start gap-5 px-10 pb-5 md:grid-cols-3">
          <Grid className="flex flex-col gap-4 text-center md:text-start">
            <h3 className="font-site text-multiGreen-xLight">
              O rodapé pode conter várias colunas
            </h3>
            <p className="opacity-75">
              Cuja customização será feita depois de defirnimos quantas colunas
              este terá
            </p>
          </Grid>
          <Grid className="flex flex-col gap-4 text-center">
            <h3 className="font-site text-multiGreen-xLight">
              Mas se esste possuir mais que duas colunas...
            </h3>
            <p className="opacity-75">
              ou apenas uma, o conteúdo nesses casos fica centralizado como esse
            </p>
          </Grid>
          <Grid className="flex flex-col gap-4 text-center md:text-end">
            <h3 className="font-site text-multiGreen-xLight">
              E as colunhas se ajustam automaticamente ao conteúdo
            </h3>
            <p className="opacity-75">Algum texto aqui.</p>
          </Grid>
        </Grid>
        <Copyright />
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
