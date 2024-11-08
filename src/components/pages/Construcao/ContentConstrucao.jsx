import Card from "@/components/Card";
import AnimatedSection from "@/ui/AnimatedSection";
import { CardMedia, Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";

const EmConstrucao = () => {
  return (
    <AnimatedSection
      className="mx-auto my-[4rem] flex !w-[90%] grow flex-col items-center justify-center gap-5 md:!w-[80%]"
      animation="fade"
    >
      <h1 className="text-center">
        Nossa equipe de desenvolvimento está realizando manutenções
      </h1>
      <Card
        media={<CardMedia image="/EmConstrucao.png" component="img" />}
        className="h-fit shadow-none"
      />
      <Grid className="space-y-4">
        <p>
          Devido a manutenções que estão sendo realizadas em nossos serviços,
          solicitamos que volte novamente mais tarde à essa página.
        </p>
        <p>
          Enquanto isso, não deixe de verificar nossas outras opções de seguro
          em{" "}
          <Link to="/" target="_blank" className="pageLink">
            nosso site
          </Link>
          !
        </p>
      </Grid>
    </AnimatedSection>
  );
};

export default EmConstrucao;
